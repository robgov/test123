

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { SpecializationRequest, VwSpecialization } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class SpecializationService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'specialization';
    }
    
    public getSpecialization(id: number): Observable<VwSpecialization[]> { 
        return this.get(this.url + '{id}', id);
    }
    public getSpecializations(): Observable<VwSpecialization[]> { 
        return this.get(this.url + '');
    }
    public getSpecializationByProgramId(request: SpecializationRequest): Observable<VwSpecialization> { 
        return this.get(this.url + 'GetSpecializationByProgramId', request);
    }

    private get url() {
        return "http://localhost:5001/api/" + this.key + "/";
    }
}
