import { Controller, Post, Body, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  @Post()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Pedido creado correctamente',
    schema: {
      example: {
        orderId: 123,
        status: 'PENDING',
        createdAt: '2025-04-18T12:34:56Z',
      },
    },
  })
  async create(
    @Request() req: any,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    // lógica para crear pedido…
    return {
      orderId: 123,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    };
  }
}
