import { ISampleRepository } from "@modules/sample-module/repositories/ISampleRepository";
import { Repository, getRepository } from "typeorm";
import { Sample } from "../entities/Sample";

class SampleRepository implements ISampleRepository {
  private repository: Repository<Sample>;

  constructor() {
    this.repository = getRepository(Sample);
  }

  async findById(id: string): Promise<Sample> {
    const sample = await this.repository.findOne(id);
    return sample;
  }
}

export { SampleRepository };
