import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// para hacer funcionar rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomSeguroPipe } from './Pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent,
    NoimagePipe,
    CardComponent,
    LoadingComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
