import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProductoDto {
    @IsString()
    nombre: string;

    @IsNumber()
    precioUnitario: number;

    @IsNumber()
    stock: number;

    @IsString()
    categoria: string;

    @IsDate()
    fechaIngreso: Date;
}