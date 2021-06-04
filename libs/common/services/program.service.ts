

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramsRequest, VwPmpPsiprogramCountByCategory, VwProgram } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'program';
    }
    
    public getProgram(id: number): Observable<VwProgram[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getPrograms(request: ProgramsRequest): Observable<VwProgram[]> { 
        return this.get(this.url + 'GetPrograms', request);
    }
    public getProgramCountByCategory(): Observable<VwPmpPsiprogramCountByCategory[]> { 
        return this.get(this.url + 'GetProgramCountByCategory');
    }

    private get url() {
        return "http://localhost:5001/api/" + this.key + "/";
    }
}
