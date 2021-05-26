

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InstitutionSummaryService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'institutionSummary';
    }
    
    public getInstitutionSummary(id: number): Observable<VwInstitutionSummary[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getInstitutionSummaryByProvincialInstitutionNumber(pin: number): Observable<VwInstitutionSummary[]> { 
        return this.get(this.url + 'GetInstitutionByProvincialInstitutionNumber/{pin}', pin);
    }
    public getInstitutionSummarys(institutionSummaryParameters: InstitutionsParameters): Observable<VwInstitutionSummary[]> { 
        return this.get(this.url + '', institutionSummaryParameters);
    }

    private get url() {
        return "";
    }
}
