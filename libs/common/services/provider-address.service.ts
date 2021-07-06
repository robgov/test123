﻿

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProviderAddressDto, ProviderAddressRequest } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderAddressService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerAddress';
    }
    
    public getProviderAddresses(request: ProviderAddressRequest): Observable<ProviderAddressDto[]> { 
        return this.get(this.url + 'GetProviderAddresses', request);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
