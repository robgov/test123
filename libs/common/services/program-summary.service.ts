

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramSummaryDto } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramSummaryService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'programSummary';
    }
    
    public getProgramSummaries(): Observable<ProgramSummaryDto[]> { 
        return this.get(this.url + 'GetProgramSummaries');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
