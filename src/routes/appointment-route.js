import express from "express";
import AppointmentController from "../controllers/appointment-controller.js";

const router = express.Router();

router.post("/", AppointmentController.create);
router.get("/:uuid", AppointmentController.get);
router.put("/:uuid", AppointmentController.update);
router.delete("/:uuid", AppointmentController.delete);
router.get("/", AppointmentController.getAll);

export default router;
