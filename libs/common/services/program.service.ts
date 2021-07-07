

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramDto, ProgramsRequest, PsiSpecializationCountByCategoryDto } from '@libs/common/models';

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
    public getProgramCountByCategory(): Observable<PsiSpecializationCountByCategoryDto[]> { 
        return this.get(this.url + 'GetProgramCountByCategory');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
