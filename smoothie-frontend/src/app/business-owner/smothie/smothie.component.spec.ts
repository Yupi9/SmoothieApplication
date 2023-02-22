import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmothieComponent } from './smothie.component';

describe('SmothieComponent', () => {
  let component: SmothieComponent;
  let fixture: ComponentFixture<SmothieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmothieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmothieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
