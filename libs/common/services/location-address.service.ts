

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { PagedDataParameters, VwLocationAddress } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class LocationAddressService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'locationAddress';
    }
    
    public getLocationAddress(id: number): Observable<VwLocationAddress[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getLocationAddresses(locationAdressParameters: PagedDataParameters): Observable<VwLocationAddress[]> { 
        return this.get(this.url + 'GetLocationAddresses', locationAdressParameters);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
