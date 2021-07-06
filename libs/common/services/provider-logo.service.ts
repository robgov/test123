

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProviderLogoDto } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderLogoService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerLogo';
    }
    
    public getProviderLogos(): Observable<ProviderLogoDto[]> { 
        return this.get(this.url + 'GetProviderLogos');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
