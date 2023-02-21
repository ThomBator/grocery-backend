import express, { Express, Request, Response } from "express";
import supabase from "./supabase-client";
const app: Express = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("ListItems").select().order("id");

  if (error) {
    console.error(error);
  }
  if (data) {
    res.json(data);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
