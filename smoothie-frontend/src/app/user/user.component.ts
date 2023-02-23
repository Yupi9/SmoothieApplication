import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Smoothie } from 'src/app/shared/models/smoothie';
import { SmoothieService } from 'src/app/shared/services/smoothie.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

export interface SmoothieWithQuantity extends Smoothie {
  quantity?: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'ingredients', 'energy', 'protein', 'fat', 'carbohydrate', 'quantity', 'actions'];
  smoothiesDataSource: MatTableDataSource<SmoothieWithQuantity>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private smoothieService: SmoothieService, public dialog: MatDialog) {
    this.smoothiesDataSource = new MatTableDataSource();
    this.loadSmoothies();
  }

  ngAfterViewInit() {
    this.smoothiesDataSource.paginator = this.paginator;
  }

  loadSmoothies() {
    this.smoothieService.getSmoothies().subscribe(smoothies => (this.smoothiesDataSource.data = smoothies));
  }

  finishOrder() {
    this.dialog.open(OrderDialogComponent, {
      width: '400px',
      data: {
        smoothieQuantity: this.getSelectedSmoothies(),
      }
    });
  }

  addSmoothie(smoothie: SmoothieWithQuantity) {
    if (!smoothie.quantity) {
      smoothie.quantity = 0;
    }
    smoothie.quantity++;
  }

  isAnySmoothieSelected(): boolean {
    return this.getSelectedSmoothies().length > 0;
  }

  private getSelectedSmoothies(): SmoothieWithQuantity[] {
    return this.smoothiesDataSource.data.filter(smoothie => smoothie.quantity! > 0);
  }
}
