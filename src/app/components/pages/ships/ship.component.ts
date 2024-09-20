import { CommonModule } from '@angular/common';
import {trigger, state, style, transition, animate} from '@angular/animations'
import { Component, inject } from '@angular/core';
import { MatTableModule, MatCell } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog';
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
    MatCell,
    MatDialogModule,
    MatFormFieldModule,
    MatInput,
    MatTableModule,
    MatPaginatorModule,
    MatIcon,
    MatProgressSpinnerModule,
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
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
  showDetails: boolean = false
  expandedElement: Ship | null = null
  displayedColumns: string[] = [
    'name',
    'model',
    'manufacturer',
    'cargo_capacity',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true;


  get(page = 1) {
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
