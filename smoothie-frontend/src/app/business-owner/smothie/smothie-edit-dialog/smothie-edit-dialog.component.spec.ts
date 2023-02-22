import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmothieEditDialogComponent } from './smothie-edit-dialog.component';

describe('SmothieEditDialogComponent', () => {
  let component: SmothieEditDialogComponent;
  let fixture: ComponentFixture<SmothieEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmothieEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmothieEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
