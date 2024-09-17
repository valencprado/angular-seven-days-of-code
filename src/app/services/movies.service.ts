import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
     return this.http.get('https://swapi.dev/api/films')
  }
}
