import { Component, Inject } from '@angular/core';
import { Smoothie } from 'src/app/shared/models/smoothie';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormBuilder, UntypedFormControl } from '@angular/forms';
import { SmoothieService } from 'src/app/shared/services/smoothie.service';

export interface DialogData {
  smoothie?: Smoothie
}

@Component({
  selector: 'app-smothie-edit-dialog',
  templateUrl: './smothie-edit-dialog.component.html',
  styleUrls: ['./smothie-edit-dialog.component.css']
})
export class SmothieEditDialogComponent {

  smoothieForm = this.formBuilder.group({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(100)]),
    ingredients: new FormControl<string>('', Validators.required),
    nutrition: this.formBuilder.group({
      id: new FormControl<number | null>(null),
      energy: new FormControl<number | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]{1,3}')]),
      protein: new FormControl<number | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]{1,3}'), Validators.max(100)]),
      fat: new FormControl<number | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]{1,3}'), Validators.max(100)]),
      carbohydrate: new FormControl<number | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]{1,3}'), Validators.max(100)]),
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder, private smoothieService: SmoothieService) {
    this.smoothieForm.patchValue(data.smoothie!);
  }

  saveSmoothie() {
    let smoothie: Smoothie = this.smoothieForm.value as Smoothie;
    this.smoothieService.saveSmoothie(smoothie).subscribe(result => { }, error => {
      alert(error);
    });
  }
}
