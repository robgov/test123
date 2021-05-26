

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ResourceService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'resource';
    }
    
    public retrievePublicResource(): Observable<ResourceResponse> { 
        return this.get(this.url + 'v1/public');
    }
    public retrievePrivateResource(): Observable<ResourceResponse> { 
        return this.get(this.url + 'v1/private');
    }

    private get url() {
        return "";
    }
}
