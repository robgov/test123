

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramCostDto, ProgramCostsRequest } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramCostService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'programCost';
    }
    
    public getProgramCosts(request: ProgramCostsRequest): Observable<ProgramCostDto[]> { 
        return this.get(this.url + 'GetProgramCosts', request);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
