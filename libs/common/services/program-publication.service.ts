

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VwProgramPublication } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramPublicationService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'programPublication';
    }
    
    public getProgramPublication(id: number): Observable<VwProgramPublication[]> { 
        return this.get(this.url + '{id}', id);
    }

    private get url() {
        return "http://localhost:5001/api/" + this.key + "/";
    }
}
