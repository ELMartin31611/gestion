import { IsNumber, IsDate } from 'class-validator';

export class UpdateVentaDto {

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
