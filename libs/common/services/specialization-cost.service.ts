

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { SpecializationCostDto, SpecializationCostRequest } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class SpecializationCostService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'specializationCost';
    }
    
    public getSpecializationCosts(request: SpecializationCostRequest): Observable<SpecializationCostDto[]> { 
        return this.get(this.url + 'GetSpecializationCosts', request);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
