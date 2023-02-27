import { container } from "tsyringe";

import "@shared/container/providers/providers-injector";

import { SampleRepository } from "@modules/sample-module/infra/typeorm/repositories/SampleRepository";
import { ISampleRepository } from "@modules/sample-module/repositories/ISampleRepository";

container.registerSingleton<ISampleRepository>(
  "SampleRepository",
  SampleRepository
);
