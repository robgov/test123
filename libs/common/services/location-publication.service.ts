

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwLocationPublication } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class LocationPublicationService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'locationPublication';
    }
    
    public getLocationPublication(id: number): Observable<VwLocationPublication[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
