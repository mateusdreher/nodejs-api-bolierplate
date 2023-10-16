import { Router, Request, Response, NextFunction } from "express";
import { authenticationMiddleware, permissionMiddleware } from "../middlewares";
import { loginController } from "./controllers";

const router = Router();
router.post('/login', (request: Request, response: Response, next: NextFunction) => {
	return loginController.handle(request, response, next);
});
export {router as userRouter };