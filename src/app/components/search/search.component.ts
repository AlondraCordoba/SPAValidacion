import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  resultados: any = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) { }

  // tslint:disable-next-line: typedef
  buscar(term){
    this.loading = true;
    this.spotify.getArtist(term).subscribe((data: any) => {
      // console.log(data.artists.items);
      this.resultados = data;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      // console.log(errorServicio);
      this.mensajeError = errorServicio.console.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}