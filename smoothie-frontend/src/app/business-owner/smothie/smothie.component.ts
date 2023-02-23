import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Smoothie } from 'src/app/shared/models/smoothie';
import { SmoothieService } from 'src/app/shared/services/smoothie.service';
import { MatDialog } from '@angular/material/dialog';
import { SmothieEditDialogComponent } from './smothie-edit-dialog/smothie-edit-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-smothie',
  templateUrl: './smothie.component.html',
  styleUrls: ['./smothie.component.css']
})
export class SmothieComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'ingredients', 'energy', 'protein', 'fat', 'carbohydrate', 'actions'];
  smoothieDataSource: MatTableDataSource<Smoothie>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private smoothieService: SmoothieService, public dialog: MatDialog) {
    this.smoothieDataSource = new MatTableDataSource();
    this.loadSmoothies();
  }

  ngAfterViewInit() {
    this.smoothieDataSource.paginator = this.paginator;
  }

  onDelete(smothie: Smoothie): void {
    this.smoothieService.deleteSmoothie(smothie.id!).subscribe(() => this.loadSmoothies());
  }

  loadSmoothies() {
    this.smoothieService.getSmoothies().subscribe(smoothies => (this.smoothieDataSource.data = smoothies));
  }

  openEditDialog(smoothie: Smoothie | null) {
    this.dialog.open(SmothieEditDialogComponent, {
      width: '400px',
      data: {
        smoothie: smoothie,
      }
    }).afterClosed().subscribe(result => {
      if (result.reload) {
        this.loadSmoothies();
      }
    });
  }
}
