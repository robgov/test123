

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { PagedDataParameters, VwLocation } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class LocationService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'location';
    }
    
    public getLocation(id: number): Observable<VwLocation[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getLocations(locationParameters: PagedDataParameters): Observable<VwLocation[]> { 
        return this.get(this.url + 'GetLocations', locationParameters);
    }

    private get url() {
        return "http://localhost:5001/api/" + this.key + "/";
    }
}
