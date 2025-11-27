import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  precioUnitario: number;

  @Column()
  stock: number;

  @Column()
  categoria: string;

  @Column()
  fechaIngreso: Date;



}