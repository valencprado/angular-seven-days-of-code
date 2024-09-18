import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { SwapiService } from '../../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../types/movie';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInput,
    MatTableModule,
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  moviesService: SwapiService = inject(SwapiService);
  dataSource: Movie[] = [];
  searchInput: string = '';
  isLoading: boolean = false;
  displayedColumns: string[] = [
    'title',
    'director',
    'producer',
    'release_date',
  ];
  constructor() {
    this.isLoading = true;
    this.moviesService.getAllMovies().subscribe((res) => {
      this.dataSource = res.results;
      this.isLoading = false;

    });
  }

  formatDate(date: string) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-BR');
  }

  searchMovie() {
    this.isLoading = true;
    this.moviesService.searchMovies(this.searchInput).subscribe((res) => {
      this.dataSource = res.results;
      this.isLoading = false;
    });
  }
}
