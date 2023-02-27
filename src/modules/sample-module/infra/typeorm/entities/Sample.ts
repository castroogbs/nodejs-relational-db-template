import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("samples")
class Sample {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Sample };
