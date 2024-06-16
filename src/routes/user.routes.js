import {Router} from "express";
import { registeruser } from "../cotrollers/user.controller.js";

const router=Router()

router.route("/register").post(registeruser)
// router.route("/login").post(registeruser)

export default router