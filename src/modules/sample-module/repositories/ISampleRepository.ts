import { Sample } from "../infra/typeorm/entities/Sample";

interface ISampleRepository {
  findById(id: string): Promise<Sample>;
}

export { ISampleRepository };
