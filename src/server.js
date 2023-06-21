import express from "express";
import path from "path";
import cors from "cors";
import router from './routes.js';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json())
app.use(cors())
app.use('/', router)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})