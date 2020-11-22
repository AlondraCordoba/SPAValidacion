import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
   artista: any = {};
   tracks: any [];
   loading: boolean;

  constructor( private aR: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    // Acceder a los parametros de la ruta
      // console.log(params);
      // tslint:disable-next-line: no-shadowed-variable
       // this.getArtist(params["id"]);
       // this.getTopTracks(params["id"]);
      /* this.spotify.getRouteArtist(params['id']).subscribe(data => {
        this.loading = false;
        this.artista = data;
        console.log(this.artista);
           console.log(this.artista.images);*/

    this.aR.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
           });
   }

   // tslint:disable-next-line: typedef
   getTopTracks(id){
     this.spotify.getTopTracks(id).subscribe(data => {
       this.tracks = data;
       console.log (this.tracks = data);
      });
   }
      // tslint:disable-next-line: typedef
   getArtist(id){
     this.spotify.getRouteArtist(id).subscribe(data => {
       this.artista = data;
       this.loading = false;
       console.log(this.artista.images);
     });
   }

  ngOnInit(): void {
  }

}
