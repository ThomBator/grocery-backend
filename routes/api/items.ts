import express, { Request, Response } from "express";
import supabase from "../../supabase-client";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//@route GET api/items
//@description get all items
//@access Public
router.get("/", async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("ListItems").select().order("id");

  if (error) {
    console.error(error);
  }
  if (data) {
    res.send(data);
  }
});

//@route POST api/items
//@description Insert an item
//@access Public
router.post("/", async (req: Request, res: Response) => {
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

//@route PUT api/items/:id
//@description Update item
//@access Public

router.put("/:id", async (req: Request, res: Response) => {
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

//@route DELETE api/items
//@description Delete entire list
//@access public

router.delete("/", async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("ListItems")
    .delete()
    .neq("id", 0)
    .select();

  if (error) {
    res.send(error);
  } else {
    res.send("deleted!");
  }
});

//@route DELETE api/items/:id
//@description Delete book by id
//@access public

router.delete("/:id", async (req: Request, res: Response) => {
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

export default router;
