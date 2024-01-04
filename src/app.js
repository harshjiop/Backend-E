import express from "express";
import cors from "cors";
import CookieParser from "cookie-parser";
import { Cors_Origin } from "./constants.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/User.route.js";

const app = express();

app.use(
  cors({
    origin: Cors_Origin,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// import userRouter from "./routes/user.route.js";
// import router from ''routes/user.route.js';

app.use("/api/v1/users", userRouter);

export { app };
