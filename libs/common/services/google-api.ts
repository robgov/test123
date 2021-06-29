import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleGeocodeApiService {
  protected urlBase = 'https://maps.googleapis.com/maps/api/geocode/json?';
  protected apiKey = 'AIzaSyBzwNctDuWrCHMy_65PbE3PT5kk06je00E';
  // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBzwNctDuWrCHMy_65PbE3PT5kk06je00E

  constructor(public http: HttpClient) {}

  public getPostalCodeFromLatLong(
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
      this.apiKey;
    return this.http.get(postalCodeLookupUrl);
  }
}
