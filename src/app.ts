import "express-async-errors";
import cors from "cors";
import express from "express";
import { routes } from "router";

const app = express();

app.use(cors());

app.use(express.json());
// app.use(express.urlencoded());

app.use(routes);
// app.use(errorHandler);

export { app };
