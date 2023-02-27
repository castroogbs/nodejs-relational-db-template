import { ISampleDTO } from "@modules/sample-module/dto/ISampleDTO";
import { ISampleRepository } from "@modules/sample-module/repositories/ISampleRepository";
import { ISampleProvider } from "@shared/container/providers/sample-provider/ISampleProvider";
import { IUseCaseContract } from "@shared/contract/IUseCaseContract";
import { inject, injectable } from "tsyringe";

@injectable()
class SampleUseCase implements IUseCaseContract<ISampleDTO, void> {
  constructor(
    @inject("SampleRepository")
    private sampleRepository: ISampleRepository,

    @inject("SampleProvider")
    private sampleProvider: ISampleProvider
  ) {}

  async execute({ description, id }: ISampleDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { SampleUseCase };
