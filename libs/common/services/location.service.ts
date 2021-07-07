

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { LocationDto, PagedDataParameters } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class LocationService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'location';
    }
    
    public getLocations(locationParameters: PagedDataParameters): Observable<LocationDto[]> { 
        return this.get(this.url + 'GetLocations', locationParameters);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
