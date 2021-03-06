import "express-async-errors";
import cors from "cors";
import express from "express";
import { routes } from "router";

const port = process.env.PORT || 3333;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
