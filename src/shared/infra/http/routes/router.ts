import { Router } from "express";

import { sampleRoutes } from "./sample.routes";

const router = Router();

router.use("/samples", sampleRoutes);

export { router };
