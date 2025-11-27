import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly ProductoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.ProductoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.ProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProductoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.ProductoService.update(id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProductoService.remove(id);
  }
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';