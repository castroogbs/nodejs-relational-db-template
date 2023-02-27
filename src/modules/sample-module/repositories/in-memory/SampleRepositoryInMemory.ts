import { Sample } from "@modules/sample-module/infra/typeorm/entities/Sample";
import { ISampleRepository } from "@modules/sample-module/repositories/ISampleRepository";

class SampleRepositoryInMemory implements ISampleRepository {
  samples: Sample[] = [];

  async findById(id: string): Promise<Sample> {
    return this.samples.find((user) => user.id === id);
  }
}

export { SampleRepositoryInMemory };
