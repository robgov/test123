import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { Dictionary } from '../models/dictionary';
import { HttpObjectMapper } from './http-object-mapper';

export abstract class EndPointService {

	protected urlBase = "https://localhost:5001/api/";

	protected constructor(public http: HttpClient) {}

	private localCache$: Map<string, Observable<any>> = new Map<string, Observable<any>>();

	protected getOrAdd<TOutput, TInput>(url: string, params: TInput = null): Observable<TOutput> {
		let value$ = this.localCache$.get(url);

		if (!value$) {
			value$ = this.get(url, params, {}).pipe(publishReplay(1), refCount()) as Observable<TOutput>;

			this.localCache$.set(url, value$);
		}

		return value$;
	}

	protected get<TOutput, TInput>(
		action: string,
		params: TInput = null,
		headers: Dictionary<string> = {}
	): Observable<TOutput> {
		let httpParams = new HttpParams();

		if (params !== null) {
			Object.keys(params).forEach((key) => {
				const val = params[key];

				if (val instanceof Array) {
					val.forEach((c, i) => {
						const keyIndex = key + '[' + i + ']';
						httpParams = httpParams.append(keyIndex, c);
					});
				} else {
					httpParams = httpParams.append(key, val);
				}
			});
		}

		const req = {
			params: httpParams,
			headers: new HttpHeaders(),
		};

		Object.entries(headers).map(([key, value]) => {
			req.headers = req.headers.set(key, value);
		});

		return this.http.get(action, req) as Observable<TOutput>;
	}

	protected put<TOutput, TInput>(action: string, params: TInput = null): Observable<TOutput> {
		return this.http.put(action, HttpObjectMapper.mapObjectToServer(params), {
			withCredentials: true,
		}) as Observable<TOutput>;
	}

	protected post<TOutput, TInput>(action: string, params: TInput): Observable<TOutput> {
		return this.http.post(action, HttpObjectMapper.mapObjectToServer(params), {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
			withCredentials: true,
		}) as Observable<TOutput>;
	}

	protected deleteCore<TOutput, TInput>(action: string, params: TInput): Observable<TOutput> {
		let httpParams = new HttpParams();

		if (params !== null) {
			Object.keys(params).forEach((key) => {
				const val = params[key];

				if (val instanceof Array) {
					val.forEach((c, i) => {
						const keyIndex = key + '[' + i + ']';
						httpParams = httpParams.append(keyIndex, c);
					});
				} else {
					httpParams = httpParams.append(key, val);
				}
			});
		}

		const options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
			params: httpParams,
			withCredentials: true,
		};

		return this.http.delete(action, options) as Observable<TOutput>;
	}

	private buildFormData(formData: FormData, data: any, parentKey = '') {
		if (
			data &&
			typeof data === 'object' &&
			!(data instanceof Date) &&
			!(data instanceof File) &&
			!(data instanceof Blob) &&
			!(data instanceof Array)
		) {
			// if data is an object (except for certain types)
			// recursively build form data
			Object.keys(data).forEach((key) => {
				this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
			});
		} else if (data instanceof Array) {
			data.forEach((item) => {
				formData.append(parentKey + '[]', item);
			});
		} else if (data instanceof Date) {
			const value = data == null ? '' : data.toISOString();

			formData.append(parentKey, value);
		} else {
			// primitives, or one of the special types
			const value = data == null ? '' : data;

			formData.append(parentKey, value);
		}
	}
	public buildFormDataFromModel(model: any): FormData {
		const formData = new FormData();
		this.buildFormData(formData, model);
		return formData;
	}
}
