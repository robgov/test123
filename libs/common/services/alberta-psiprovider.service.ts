

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramCategoryRequest, VwAlbertaPsiprovider } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class AlbertaPSIProviderService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'albertaPSIProvider';
    }
    
    public getAlbertaPsiProvider(id: number): Observable<VwAlbertaPsiprovider[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getAlbertaPsiProviders(): Observable<VwAlbertaPsiprovider[]> { 
        return this.get(this.url + '');
    }
    public getAlbertaPsiProviderCategories(): Observable<string[]> { 
        return this.get(this.url + 'ProviderCategory');
    }
    public getProgramCountByCategory(requestParams: ProgramCategoryRequest): Observable<number> { 
        return this.get(this.url + 'ProviderCategoryCount', requestParams);
    }

    private get url() {
        return "http://localhost:5001/api/" + this.key + "/";
    }
}
