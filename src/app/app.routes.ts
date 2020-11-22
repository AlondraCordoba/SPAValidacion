import { Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

// Exportar una constante que será nuestro arreglo de rutas (paths)
export const ROUTES: Routes = [
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
]