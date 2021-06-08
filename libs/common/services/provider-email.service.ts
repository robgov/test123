

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwProviderEmail } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderEmailService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerEmail';
    }
    
    public getProviderEmail(id: number): Observable<VwProviderEmail[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
