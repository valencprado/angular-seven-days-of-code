
import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { MoviesService } from '../../../services/movies.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../types/movie';






@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

export class MoviesComponent {
  moviesService : MoviesService = inject(MoviesService)
  dataSource :  Movie[] = []
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

}
