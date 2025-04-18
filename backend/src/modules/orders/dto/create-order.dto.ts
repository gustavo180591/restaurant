// src/modules/orders/dto/create-order.dto.ts
export class CreateOrderDto {
  items!: { menuItemId: number; quantity: number }[];
  tableId?: number;
}
