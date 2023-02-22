import { Component, Inject } from '@angular/core';
import { Smoothie } from 'src/app/shared/models/smoothie';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { SmoothieWithQuantity } from '../user.component';
import { CreateOrderRequest, OrderItem, OrderService } from 'src/app/shared/services/order.service';
import { Order } from 'src/app/shared/models/order';
import { Router } from '@angular/router';

export interface DialogData {
  smoothieQuantity: SmoothieWithQuantity[]
}

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent {
  orderForm = this.formBuilder.group({
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    phoneNumber: new FormControl<string>('', [Validators.required, Validators.pattern('[0-9\\+]{7,15}')]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private router: Router) {
  }

  sendOrder() {
    console.log(this.data.smoothieQuantity);
    let createOrderRequest: CreateOrderRequest = {
      customerName: this.orderForm.value.name!,
      customerPhoneNumber: this.orderForm.value.phoneNumber!,
      items: this.data.smoothieQuantity.map(smoothie => {
        return {
          smoothieId: smoothie.id,
          quantity: smoothie.quantity,
        } as OrderItem;
      })
    }
    this.orderService.saveOrder(createOrderRequest).subscribe((order: Order) => {
      this.router.navigateByUrl('/user/order/' + order.id)
    });
  }
}
