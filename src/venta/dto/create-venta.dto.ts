import { IsNumber, IsDate } from 'class-validator';

export class CreateVentaDto {

  @IsNumber()
  productoId: number;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  precioUnitario: number;

  @IsNumber()
  subtotal: number;

  @IsNumber()
  iva: number;

  @IsNumber()
  total: number;

  @IsDate()
  fechaVenta: Date;
}
