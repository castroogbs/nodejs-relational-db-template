import { ISampleProvider } from "@shared/container/providers/sample-provider/ISampleProvider";

class SampleProvider implements ISampleProvider {
  test(): string {
    throw new Error("Method not implemented.");
  }
}

export { SampleProvider };
