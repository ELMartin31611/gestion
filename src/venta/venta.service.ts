import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { venta } from './venta.entity';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(venta)
    private readonly VentaRepository: Repository<venta>,
  ) {}

  create(CreateVentaDto: CreateVentaDto) {
    const Venta = this.VentaRepository.create(CreateVentaDto);
    return this.VentaRepository.save(Venta);
  }

  findAll() {
    return this.VentaRepository.find();
  }

  findOne(id: string) {
    return this.VentaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateVentaDto: UpdateVentaDto) {
    const Venta = await this.VentaRepository.findOne({ where: { id } });
    if (!Venta) return null;
    Object.assign(Venta, updateVentaDto);
    return this.VentaRepository.save(Venta);
  }

  async remove(id: string) {
    const Venta = await this.VentaRepository.findOne({ where: { id } });
    if (!Venta) return null;
    return this.VentaRepository.remove(Venta);
  }
}
