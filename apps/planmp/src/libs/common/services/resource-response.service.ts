

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigSelectors } from '@jsg/libs/common/state/selectors/config.selectors';
import { EndPointService } from '@jsg/libs/shared/services/end-point.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ResourceService extends EndPointService {
	key: string;

    constructor(http: HttpClient, private store: Store){
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
        return this.store.selectSnapshot(ConfigSelectors.getUrls)[this.key];
    }
}
