import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleGeocodeApiService {
  protected urlBase = 'https://maps.googleapis.com/maps/api/geocode/json?';

  constructor(public http: HttpClient) { }

  public getPostalCodeFromLatLong(
    apiKey: string,
    latitude: number,
    longitude: number
  ): Observable<Object> {
    const postalCodeLookupUrl: string =
      this.urlBase +
      'latlng=' +
      latitude +
      ',' +
      longitude +
      '&key=' +
      apiKey;
    return this.http.get(postalCodeLookupUrl);
  }
}
