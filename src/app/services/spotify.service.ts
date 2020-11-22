import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getQuery(query: string){
    // aquí se declaran los headers para las peticiones
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQC0gafCGlIqyhZTmTVVw6lAElWdPSOlWAaEMWMaFpVeRRtmJ-jHbHmEoLn49eOBmsWgKn_KKlMItUOHWDE'
    });

    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, {headers});
  }
  // tslint:disable-next-line: typedef
  getNewReleases(){
    // const headers = new HttpHeaders({
    //   Authorization : ''Bearer BQB85jv_uS7lHm4O6-YyfRKnuchvIP0hvjOaKgOJnfdG-II3KRJ4UCsW6X7p3ZkHc-LSqfv06nQOwNbjDeY'
    // });

    return this.getQuery('browse/new-releases').pipe(map(data => {
      return data['albums'].items;
    }));

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(map(data =>{
    //   return data['albums'].items;
    // }));
  }

    // tslint:disable-next-line: typedef
  getArtist(term){
    // const headers = new HttpHeaders({
    //   Authorization : 'Bearer BQAEPfMYTahL7fCMsS_pkU-J3TrGTn0O7y62X1jy4bKRhxceleNyV-wIorcSw58h7wUP_YaMCxFPd8kAW8c'
    // });

    return this.getQuery(`search?q=${term}&type=artist`).pipe(map(data => {
      return data['artists'].items;
    }));

    // return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`, {headers}).pipe(map(data => {
    //   return data['artists'].items;
    // }));
  }

      // tslint:disable-next-line: typedef
      getRouteArtist(id){

        return this.getQuery(`artist/${id}`).pipe(map(data => {
          return data;
        }));
      }

            // tslint:disable-next-line: typedef
      getTopTracks(id){
        return this.getQuery(`artist/${id}/top-tracks?market=MX`).pipe(map(data => data['tracks']
        ));
        // El mercado se mantuvo estatico
      }

}
