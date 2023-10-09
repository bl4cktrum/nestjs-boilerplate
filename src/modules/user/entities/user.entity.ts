import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";
import { hash } from "bcrypt";
import { Exclude, Expose } from "class-transformer";
import { ApiHideProperty } from "@nestjs/swagger";
import { TimestampEntity } from "../../../infrastructure/bases/timestamp.entity";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid',{name: 'id'})
  id: string;

  // TODO: will be { unique: true }
  @Column({name: 'email'})
  email: string

  @Column({name: 'first_name'})
  /* by this we can map dto to entity by using just class-validator's plainToClass method.
  and at the same moment we do not have to map field name anymore to obey naming conventions when return jsons to client
  */
  @Expose({name: 'first_name'})
  firstName: string;

  @Column({name: 'last_name'})
  @Expose({name: 'last_name'})
  lastName: string;

  @Column({name: 'password'})
  @Exclude({toPlainOnly: true})
  @ApiHideProperty()
  password: string;

  @Column(()=> TimestampEntity, {prefix: false})
  @Exclude({toPlainOnly: true})
  @ApiHideProperty()
  timestamp: TimestampEntity;

  @ApiHideProperty()
  @Exclude({toPlainOnly: true})
  tempPassword: string;

  @AfterLoad()
  loadPassword(){
    this.tempPassword = this.password
  }

  @BeforeInsert()
  async onInsert(){
    this.password  = await hash(this.password, 10);
  }

  @BeforeUpdate()
  async onUpdate(){
    if (this.tempPassword !== this.password)
      this.password  = await hash(this.password, 10);
  }
}
