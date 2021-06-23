

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { LookupRequest, VwPmpLookup } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class LookupService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'lookup';
    }
    
    public getLookups(request: LookupRequest): Observable<VwPmpLookup[]> { 
        return this.get(this.url + 'GetLookups', request);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
