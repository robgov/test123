

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { SpecializationCostDto, SpecializationCostRequest, SpecializationDto, SpecializationRequest, SpecializationYearlyCostDto } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class SpecializationService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'specialization';
    }
    
    public getSpecializations(): Observable<SpecializationDto[]> { 
        return this.get(this.url + '');
    }
    public getSpecializationByProgramId(request: SpecializationRequest): Observable<SpecializationDto> { 
        return this.get(this.url + 'GetSpecializationByProgramId', request);
    }
    public getSpecializationYearlyCosts(): Observable<SpecializationYearlyCostDto[]> { 
        return this.get(this.url + 'GetSpecializationYearlyCosts');
    }
    public getSpecializationCosts(request: SpecializationCostRequest): Observable<SpecializationCostDto[]> { 
        return this.get(this.url + 'GetSpecializationCosts', request);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
