
import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { FormsModule } from '@angular/forms';
import { SwapiService } from '../../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../types/movie';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'





@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

export class MoviesComponent  {
  moviesService : SwapiService = inject(SwapiService)
  dataSource :  Movie[] = []
  searchInput: string = ""
  displayedColumns: string [] = ['title', 'director', 'producer', 'release_date']
  constructor() {
   this.moviesService.getAllMovies().subscribe((res) => {
    this.dataSource = res.results
    })
  }


  formatDate(date: string) {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('pt-BR')
  }

  searchMovie(movie: string) {

    this.moviesService.searchMovies(movie).subscribe((res) => {
      this.dataSource = res.results
    })
  }

}
