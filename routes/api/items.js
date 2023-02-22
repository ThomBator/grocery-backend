"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supabase_client_1 = __importDefault(require("../../supabase-client"));
const body_parser_1 = __importDefault(require("body-parser"));
const router = express_1.default.Router();
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use(body_parser_1.default.json());
//@route GET api/items
//@description get all items
//@access Public
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_client_1.default.from("ListItems").select().order("id");
    if (error) {
        console.error(error);
    }
    if (data) {
        res.send(data);
    }
}));
//@route POST api/items
//@description Insert an item
//@access Public
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_client_1.default
        .from("ListItems")
        .insert({ description: req.body.description })
        .select();
    if (error) {
        res.send(error);
    }
    if (data) {
        res.send("added!");
    }
}));
//@route PUT api/items/:id
//@description Update item
//@access Public
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_client_1.default
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
}));
//@route DELETE api/items
//@description Delete entire list
//@access public
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_client_1.default
        .from("ListItems")
        .delete()
        .neq("id", 0)
        .select();
    if (error) {
        res.send(error);
    }
    else {
        res.send("deleted!");
    }
}));
//@route DELETE api/items/:id
//@description Delete book by id
//@access public
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_client_1.default
        .from("ListItems")
        .delete()
        .eq("id", req.params.id)
        .select();
    if (error) {
        res.send(error);
    }
    else {
        res.send("deleted!");
    }
}));
exports.default = router;
