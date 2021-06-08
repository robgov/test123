

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwProviderPublication } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderPublicationService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerPublication';
    }
    
    public getProviderPublication(id: number): Observable<VwProviderPublication[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return "https://localhost:5001/api/" + this.key + "/";
    }
}
