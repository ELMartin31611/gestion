import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(producto)
    private readonly ProductoRepository: Repository<producto>,
  ) {}

  create(CreateProductoDto: CreateProductoDto) {
    const producto = this.ProductoRepository.create(CreateProductoDto);
    return this.ProductoRepository.save(producto);
  }

  findAll() {
    return this.ProductoRepository.find();
  }

  findOne(id: string) {
    return this.ProductoRepository.findOne({ where: { id } });
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const Producto = await this.ProductoRepository.findOne({ where: { id } });
    if (!Producto) return null;
    Object.assign(Producto, updateProductoDto);
    return this.ProductoRepository.save(Producto);
  }

  async remove(id: string) {
    const Producto = await this.ProductoRepository.findOne({ where: { id } });
    if (!Producto) return null;
    return this.ProductoRepository.remove(Producto);
  }
}
