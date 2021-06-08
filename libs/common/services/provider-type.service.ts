

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwProviderType } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProviderTypeService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'providerType';
    }
    
    public getProviderType(id: number): Observable<VwProviderType[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
