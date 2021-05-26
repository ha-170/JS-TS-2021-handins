import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import { ApiError } from "./errors/error";
import FriendRoutes from "./routes/FriendRoutes";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

const debug = require("debug")("app");

import logger, { stream } from "./middleware/logger";
const morganFormat = process.env.NODE_ENV == "production" ? "combines" : "dev";
app.use(require("morgan")(morganFormat, { stream }));
app.set("logger", logger);
logger.log("info", "Server started");

import cors from "cors";
app.use(cors());

app.use(express.static(path.join(process.cwd(), "public")));

//import authMiddleware from "./middleware/basic-auth"
//app.get("/demo", authMiddleware);

app.get("/demo", (req, res) => {
    res.send("Server is really up!");
});

//Our own default 404-handler for api-requests
app.use("/api", (req: Request, res: Response, next) => {
    res.status(404).json({ errorCode: 404, msg: "not found" });
});

app.use("/api/friends", FriendRoutes);

//Makes JSON error-response for ApiErrors, otherwise pass on to the default error handler
app.use((err: any, req: Request, res: Response, next: Function) => {
    if (err instanceof ApiError) {
        res.status(err.errorCode).json({ errorCode: 404, msg: err.message });
    } else {
        next(err);
    }
});

export default app;
