

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {VwInstitutionSummary} from './../models';

@Injectable({
    providedIn: 'root'
})
export class InstitutionSummaryService {
	key: string;

    constructor(http: HttpClient){
        this.key = 'institutionSummary';
    }
    
    public get(id: number): Observable<VwInstitutionSummary[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getInstitution(pin: number): Observable<VwInstitutionSummary[]> { 
        return this.get(this.url + 'GetInstitutionByProvincialInstitutionNumber/{pin}', pin);
    }
    // public get(institutionSummaryParameters: InstitutionsParameters): Observable<VwInstitutionSummary[]> { 
    //     return this.get(this.url + '', institutionSummaryParameters);
    // }

    private get url() {
        return "localhost:5001";
        // return this.store.selectSnapshot(ConfigSelectors.getUrls)[this.key];
    }
}
