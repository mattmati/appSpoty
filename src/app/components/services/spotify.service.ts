import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("servicio de spotify listo!");
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBAWqUWROUQFzIaxiLTLMWcjLTpRHYG8VAIAbVVxogZCJuGhtPoAl_YS5Mkd7Mh9DsrjJqUzfOK8c_cC8c'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers} );
  }
}
