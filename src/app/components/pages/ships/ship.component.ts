import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { SwapiService } from '../../../services/swapi.service';
import { Ship } from '../../../types/ship';
@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [CommonModule,FormsModule, MatButtonModule, MatFormFieldModule, MatInput, MatTableModule, MatProgressSpinnerModule],
  templateUrl: './ships.component.html',
  styleUrl: './ships.component.css'
})
export class ShipsComponent  {
  dataSource: Ship[] = []
  shipService: SwapiService = inject(SwapiService)
  isLoading: boolean = false
  searchInput: string = ''
  displayedColumns: string[] = ['name', 'model', 'manufacturer', 'cargo_capacity']
  ngOnInit() {
    this.shipService.getAllShips().subscribe(res => {
      this.dataSource = res.results
    })
  }

  searchShip() {
    console.log(this.searchInput)
    this.isLoading = true
    this.shipService.searchShips(this.searchInput).subscribe(res => {
      this.dataSource = res.results
      this.isLoading = false
    })
  }
}
