import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { ShipsComponent } from './components/pages/ships/ship.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'movies', component: MoviesComponent, pathMatch: 'full'},
{path: 'ship', component: ShipsComponent, pathMatch: 'full'},
{path: '**', component: NotFoundComponent}
]
