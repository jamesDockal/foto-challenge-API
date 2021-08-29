import express from "express";
import cors from "cors";
import { imagesRoutes } from "./routes/images";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/images", imagesRoutes);

export default app;
