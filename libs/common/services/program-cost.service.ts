

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramCostsRequest, VwProgram, VwProgramCost } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramCostService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'programCost';
    }
    
    public getProgramCost(id: number): Observable<VwProgram[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getProgramCosts(request: ProgramCostsRequest): Observable<VwProgramCost[]> { 
        return this.get(this.url + 'GetProgramCosts', request);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
