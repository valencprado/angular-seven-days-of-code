import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { ShipComponent } from './components/pages/ship/ship.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'movies', component: MoviesComponent, pathMatch: 'full'},
{path: 'ship', component: ShipComponent, pathMatch: 'full'},
{path: '**', component: NotFoundComponent}
]
