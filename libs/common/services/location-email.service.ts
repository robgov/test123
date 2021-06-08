

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwLocationEmail } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class LocationEmailService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'locationEmail';
    }
    
    public getLocationEmail(id: number): Observable<VwLocationEmail[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
