import { Component, Input, OnInit } from '@angular/core';
/* Para las rutas parametrizadas se tiene que importar Router, la cual  se tiene que importar e inyectar en el constructor.*/
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }

    // Se puede renombrar o cambiar de nombre el paramtero, en este caso item.
  // tslint:disable-next-line: typedef
  verArtista(item){
    console.log(item);
    let artistaId;
    if (item.type === 'album') artistaId = item.artists[0].id 
    else artistaId = item.id; 
    console.log(artistaId);

    /* [nombre de la ruta, nuestro parametro]*/
    this._aRouter.navigate(['/artist', artistaId]);
  }

}
