

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { ProgramCredentialDto } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class ProgramCredentialService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'programCredential';
    }
    
    public getProgramCredentials(): Observable<ProgramCredentialDto[]> { 
        return this.get(this.url + 'GetProgramCredentials');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
