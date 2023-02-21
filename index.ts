import express, { Express, Request, Response } from "express";
import supabase from "./supabase-client";
import bodyParser from "body-parser";
const app: Express = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Test connection
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//Routes
//Get all items
app.get("/items", async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("ListItems").select().order("id");

  if (error) {
    console.error(error);
  }
  if (data) {
    res.send(data);
  }
});

//Add new Item
app.post("/items", async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("ListItems")
    .insert({ description: req.body.description })
    .select();

  if (error) {
    res.send(error);
  }
  if (data) {
    res.send("added!");
  }
});

//Update an item

app.put("/items/:id", async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("ListItems")
    .update({ description: req.body.description })
    .eq("id", req.params.id)
    .select();

  if (error) {
    res.send(error);
  }
  if (data) {
    res.send("updated!");
  }
});

//Delete an item

app.delete("/items/id:", async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("ListItems")
    .delete()
    .eq("id", req.params.id)
    .select();

  if (error) {
    res.send(error);
  } else {
    res.send("deleted!");
  }
});
