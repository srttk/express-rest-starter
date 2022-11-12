import { Router } from "express";
import {
  getUsersHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "./user.controller";

export const userRoutes = Router();

userRoutes.get("/", getUsersHandler);

userRoutes.get("/:id", getUserHandler);

userRoutes.put("/:id", updateUserHandler);

userRoutes.delete("/:id", deleteUserHandler);
