import express, { RequestHandler } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json() as RequestHandler);
app.use(cors());
app.use(routes);

app.listen(3002, () => {
  console.log(`Server running on PORT 3002`);
});
