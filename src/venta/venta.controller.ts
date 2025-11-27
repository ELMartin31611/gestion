import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Controller('venta')
export class VentaController {
  constructor(private readonly VentaService: VentaService) {}

  @Post()
  create(@Body() createVentaDto: CreateVentaDto) {
    return this.VentaService.create(createVentaDto);
  }

  @Get()
  findAll() {
    return this.VentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.VentaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return this.VentaService.update(id, updateVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.VentaService.remove(id);
  }
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';