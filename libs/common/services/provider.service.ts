

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { PagedDataParameters, ProviderAddressDto, ProviderAddressRequest, ProviderDto, ProviderLogoDto, ProviderWebsiteDto, ProviderWebsiteRequest } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'provider';
    }
    
    public getProviders(providerParameters: PagedDataParameters): Observable<ProviderDto[]> { 
        return this.get(this.url + 'GetProviders', providerParameters);
    }
    public getProviderAddresses(request: ProviderAddressRequest): Observable<ProviderAddressDto[]> { 
        return this.get(this.url + 'GetProviderAddresses', request);
    }
    public getProviderLogos(): Observable<ProviderLogoDto[]> { 
        return this.get(this.url + 'GetProviderLogos');
    }
    public getProviderWebsites(request: ProviderWebsiteRequest): Observable<ProviderWebsiteDto[]> { 
        return this.get(this.url + 'GetProviderWebsites', request);
    }
    public getAlbertaPsiProviders(): Observable<ProviderDto[]> { 
        return this.get(this.url + 'GetAlbertaPsiProviders');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
