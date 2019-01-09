import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column ()
    biografia:string
}