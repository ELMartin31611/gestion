import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { producto } from './producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([producto])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}