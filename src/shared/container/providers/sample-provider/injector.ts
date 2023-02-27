import { ISampleProvider } from "@shared/container/providers/sample-provider/ISampleProvider";
import { container } from "tsyringe";
import { SampleProvider } from "./implementations/SampleProvider";

container.registerSingleton<ISampleProvider>("SampleProvider", SampleProvider);
