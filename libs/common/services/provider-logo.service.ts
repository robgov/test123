

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProviderLogoRequest, VwProviderLogo } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderLogoService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerLogo';
    }
    
    public getProviderLogoByProviderId(request: ProviderLogoRequest): Observable<VwProviderLogo> { 
        return this.get(this.url + 'GetProviderLogoByProviderId', request);
    }
    public getProviderLogos(): Observable<VwProviderLogo[]> { 
        return this.get(this.url + '');
    }

    private get url() {
        return "https://localhost:5001/api/" + this.key + "/";
    }
}
