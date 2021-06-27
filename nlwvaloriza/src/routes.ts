import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsController";
import { ensureAuthenticated } from "./middlewares/ensureAuthrnticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();

const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.hendle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.hendle);
router.post("/compliments", ensureAuthenticated, createComplimentsController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.hendle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiverComplimentsController.hendle)
router.get("/tags", ensureAuthenticated, listTagsController.hendle)
router.get("/users", ensureAuthenticated, listUsersController.hendle)

export { router };