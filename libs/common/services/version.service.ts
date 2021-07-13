

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { VersionInfoDto } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class VersionService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'version';
    }
    
    public getVersion(): Observable<VersionInfoDto> { 
        return this.get(this.url + 'GetVersion');
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
