import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesApiReturn } from '../types/moviesApiReturn';
import { ShipsApiReturn } from '../types/moviesApiReturn copy';


@Injectable({
  providedIn: 'root',
})
export class SwapiService {
url: string = 'https://swapi.dev/api/'
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<MoviesApiReturn> {
     return this.http.get<MoviesApiReturn>(`${this.url}/films`)
  }

  searchMovies(search: string): Observable<MoviesApiReturn> {
    return this.http.get<MoviesApiReturn>(`${this.url}/films?search=${search}`)
  }

  getAllShips(): Observable<ShipsApiReturn>{
    return this.http.get<ShipsApiReturn>(`${this.url}/starships`)
  }

  searchShips(search: string) : Observable<ShipsApiReturn> {
    return this.http.get<ShipsApiReturn>(`${this.url}/starships?search=${search}`)
  }
}
