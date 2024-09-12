
import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { MoviesService } from '../../../services/movies.service';

export type Movie = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}




@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

export class MoviesComponent {
  moviesService : MoviesService = inject(MoviesService)
  dataSource :  Movie[] = []
  constructor() {
    this.dataSource = this.moviesService.getAllMovies()
  }


displayedColumns: string [] = ['title', 'director', 'release_date']
}
