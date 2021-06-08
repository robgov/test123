﻿

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwProviderWebsite } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderWebsiteService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerWebsite';
    }
    
    public getProviderWebsite(id: number): Observable<VwProviderWebsite[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}