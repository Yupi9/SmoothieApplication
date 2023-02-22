import { Smoothie } from "./smoothie";

export interface Order {
    id: number;
    customerName: number
    customerPhoneNumber: number;
    status: string;
    orderItems: OrderItem[];
}

export interface OrderItem {
   smoothie: Smoothie;
   quantity: number;
}