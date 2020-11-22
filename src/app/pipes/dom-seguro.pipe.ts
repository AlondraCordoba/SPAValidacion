import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform { 
  // Pipe que nos ayudara a "Sanitizar" una URL
  //Inyeccion
  constructor (private dS: DomSanitizer){};

  transform(value: string): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.dS.bypassSecurityTrustResourceUrl(url + value);
  }

}
