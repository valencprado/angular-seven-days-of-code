import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatPaginatorModule, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwapiService } from '../../../services/swapi.service';
import { Ship } from '../../../types/ship';
@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInput,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './ships.component.html',
  styleUrl: './ships.component.css',
})
export class ShipsComponent {
  dataSource: Ship[] = [];
  shipService: SwapiService = inject(SwapiService);
  isLoading: boolean = false;
  currentPage: number = 0
  searchInput: string = '';
  displayedColumns: string[] = [
    'name',
    'model',
    'manufacturer',
    'cargo_capacity',
  ];

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true;


  get(page = 1) {
    console.log(MatPaginatorIntl.prototype)
    this.isLoading = true
    this.shipService.getAllShips(page).subscribe((res) => {
      this.dataSource = res.results;
      this.length = res.count
      this.isLoading = false
    });
  }
  ngOnInit() {
   this.get(this.currentPage + 1)
  }

  searchShip() {
    console.log(this.searchInput);
    this.isLoading = true;
    this.shipService.searchShips(this.searchInput).subscribe((res) => {
      this.dataSource = res.results;
      this.isLoading = false;
    });
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.currentPage = this.pageIndex + 1
    this.get(this.currentPage)
  }


}
