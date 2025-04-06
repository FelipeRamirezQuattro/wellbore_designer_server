import { Router } from "express";
import * as paginator from "../middlewares/paginator";
import { getToolsPaginated } from "../controllers/tools";

const router = Router();

router.get("/", paginator.pageable, getToolsPaginated, paginator.headers);

export default router;
