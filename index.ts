import express, { Express, Request, Response } from "express";
import items from "./routes/api/items";
import cors from "cors";
//Initialize App
const app: Express = express();

//Setup cors

app.use(cors({ origin: true, credentials: true }));

//use Routes
app.use("/api/items", items);

//Test connection
const port = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Connected on ${port}. Use /api/items to access db routes.`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
