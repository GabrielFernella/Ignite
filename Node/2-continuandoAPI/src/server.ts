import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";

import "./shared/container"; // Chamando a injeção de dependencias para o projeto
import { router } from "./routes";
import swaggerfile from "./swagger.json";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerfile));

app.use(router);

app.listen(3333, () => console.log("Server is running! http://localhost:3333"));
