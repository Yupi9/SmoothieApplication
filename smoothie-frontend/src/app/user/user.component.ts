import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Smoothie } from 'src/app/shared/models/smoothie';
import { SmoothieService } from 'src/app/shared/services/smoothie.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

export interface SmoothieWithQuantity extends Smoothie {
  quantity?: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  displayedColumns: string[] = ['name', 'ingredients', 'energy', 'protein', 'fat', 'carbohydrate', 'quantity', 'actions'];
  smoothies: SmoothieWithQuantity[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private smoothieService: SmoothieService, public dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.smoothieService.getSmoothies().subscribe(smoothies => (this.smoothies = smoothies));
  }

  loadSmoothies() {
    this.smoothieService.getSmoothies().subscribe(smoothies => (this.smoothies = smoothies));
  }

  finishOrder() {
    this.dialog.open(OrderDialogComponent, {
      width: '400px',
      data: {
        smoothieQuantity: this.smoothies.filter(smoothie => smoothie.quantity! > 0),
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
    return this.smoothies.filter(smoothie => smoothie.quantity! > 0).length > 0;
  }
}
