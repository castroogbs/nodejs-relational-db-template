import { SampleController } from "@modules/sample-module/useCases/sampleUseCase/SampleController";
import { Router } from "express";

const sampleRoutes = Router();

const sampleController = new SampleController();

sampleRoutes.post("/list", sampleController.handle);

export { sampleRoutes };
