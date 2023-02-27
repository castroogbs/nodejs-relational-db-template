import { IMapperContract } from "@shared/contract/IMapperContract";
import { Sample } from "../infra/typeorm/entities/Sample";
import { ISampleDTO } from "../dto/ISampleDTO";

class SampleMapper implements IMapperContract<Sample, ISampleDTO> {
  toDTO(entity: Sample): ISampleDTO {
    throw new Error("Method not implemented.");
  }
  toEntity(dto: ISampleDTO): Sample {
    throw new Error("Method not implemented.");
  }
}

export { SampleMapper };
