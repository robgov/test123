

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwProgramType } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramTypeService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'programType';
    }
    
    public getProgramTypes(): Observable<VwProgramType[]> { 
        return this.get(this.url + '');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
