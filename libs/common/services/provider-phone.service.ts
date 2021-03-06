

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwProviderPhone } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderPhoneService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerPhone';
    }
    
    public getProviderPhone(id: number): Observable<VwProviderPhone[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
