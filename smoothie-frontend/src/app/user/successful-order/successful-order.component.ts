import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-successful-order',
  templateUrl: './successful-order.component.html',
  styleUrls: ['./successful-order.component.css']
})
export class SuccessfulOrderComponent implements OnInit {

  order: Order | undefined;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrder(id)
      .subscribe(order => this.order = order);
  }
}
