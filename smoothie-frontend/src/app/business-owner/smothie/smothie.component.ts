import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Smoothie } from 'src/app/shared/models/smoothie';
import { SmoothieService } from 'src/app/shared/services/smoothie.service';
import { MatDialog } from '@angular/material/dialog';
import { SmothieEditDialogComponent } from './smothie-edit-dialog/smothie-edit-dialog.component';

@Component({
  selector: 'app-smothie',
  templateUrl: './smothie.component.html',
  styleUrls: ['./smothie.component.css']
})
export class SmothieComponent {
  displayedColumns: string[] = ['name', 'ingredients', 'energy', 'protein', 'fat', 'carbohydrate', 'actions'];
  smoothies: Smoothie[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private smoothieService: SmoothieService, public dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.smoothieService.getSmoothies().subscribe(smoothies => (this.smoothies = smoothies));
  }

  onDelete(smothie: Smoothie): void {
    this.smoothieService.deleteSmoothie(smothie.id!).subscribe(() => this.loadSmoothies());
  }

  loadSmoothies() {
    this.smoothieService.getSmoothies().subscribe(smoothies => (this.smoothies = smoothies));
  }

  openAddDialog() {
    this.dialog.open(SmothieEditDialogComponent, {
      data: {
        smoothie: null,
      }
    }).afterClosed().subscribe(result => {
      if(result.reload){
        this.loadSmoothies();
      }
    });
  }

  openEditDialog(smoothie: Smoothie) {
    this.dialog.open(SmothieEditDialogComponent, {
      width: '400px',
      data: {
        smoothie: smoothie,
      }
    }).afterClosed().subscribe(result => {
      if(result.reload){
        this.loadSmoothies();
      }
    });
  }
}
