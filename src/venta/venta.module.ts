import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { venta } from './venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([venta])],
  controllers: [VentaController],
  providers: [VentaService],
})
export class VentaModule {}