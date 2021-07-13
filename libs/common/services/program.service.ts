

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramCostDto, ProgramCostsRequest, ProgramCredentialDto, ProgramDto, ProgramsRequest, ProgramSummaryDto, ProgramTypeDto, PsiSpecializationCountByCategoryDto } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'program';
    }
    
    public getPrograms(request: ProgramsRequest): Observable<ProgramDto[]> { 
        return this.get(this.url + 'GetPrograms', request);
    }
    public getProgramCosts(request: ProgramCostsRequest): Observable<ProgramCostDto[]> { 
        return this.get(this.url + 'GetProgramCosts', request);
    }
    public getProgramCredentials(): Observable<ProgramCredentialDto[]> { 
        return this.get(this.url + 'GetProgramCredentials');
    }
    public getProgramCountByCategory(): Observable<PsiSpecializationCountByCategoryDto[]> { 
        return this.get(this.url + 'GetProgramCountByCategory');
    }
    public getProgramSummaries(): Observable<ProgramSummaryDto[]> { 
        return this.get(this.url + 'GetProgramSummaries');
    }
    public getProgramTypes(): Observable<ProgramTypeDto[]> { 
        return this.get(this.url + 'GetProgramTypes');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
