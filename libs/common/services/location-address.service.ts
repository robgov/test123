

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { LocationAddressDto, PagedDataParameters } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class LocationAddressService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'locationAddress';
    }
    
    public getLocationAddresses(locationAdressParameters: PagedDataParameters): Observable<LocationAddressDto[]> { 
        return this.get(this.url + 'GetLocationAddresses', locationAdressParameters);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
