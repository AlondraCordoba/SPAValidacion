import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images){
      return 'assets/img/3ae17816-621e-403b-a910-538cdab6429a.jpg';
    }
    if (images.length > 0){
      return images[0].url;
    }
    else{
      return 'assets/img/3ae17816-621e-403b-a910-538cdab6429a.jpg';
    }
  }

}
