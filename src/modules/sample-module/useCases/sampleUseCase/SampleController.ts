import { IControllerContract } from "@shared/contract/IControllerContract";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { SampleUseCase } from "./SampleUseCase";

class SampleController implements IControllerContract<Request, Response> {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const { id } = request.user;

    const sampleUseCase = container.resolve(SampleUseCase);

    await sampleUseCase.execute({ description, id });

    return response.status(200).json();
  }
}

export { SampleController };
