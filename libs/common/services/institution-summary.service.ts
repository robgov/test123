﻿

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
    

    private get url() {
        return "http://localhost:5001/api/" + this.key + "/";
    }
}
