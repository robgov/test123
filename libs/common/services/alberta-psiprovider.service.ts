

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwAlbertaPsiprovider } from '@libs/common/models';

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

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
