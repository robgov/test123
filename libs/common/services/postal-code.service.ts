

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

import { PostalCodeDto, PostalCodeRequest } from '@libs/common/models';

@Injectable({
    providedIn: 'root'
})
export class PostalCodeService extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = 'postalCode';
    }
    
    public getPostalCodes(request: PostalCodeRequest): Observable<PostalCodeDto[]> { 
        return this.get(this.url + 'GetPostalCodes', request);
    }

    private get url() {
        return this.urlBase + this.key + "/";
    }
}
