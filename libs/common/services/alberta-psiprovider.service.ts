

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProviderDto } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class AlbertaPSIProviderService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'albertaPSIProvider';
    }
    
    public getAlbertaPsiProviders(): Observable<ProviderDto[]> { 
        return this.get(this.url + 'GetAlbertaPsiProviders');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
