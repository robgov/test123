

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { PagedDataParameters, VwProvider } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'provider';
    }
    
    public getProvider(id: number): Observable<VwProvider[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getProviders(providerParameters: PagedDataParameters): Observable<VwProvider[]> { 
        return this.get(this.url + 'GetProviders', providerParameters);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
