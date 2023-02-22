"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var items_exports = {};
__export(items_exports, {
  default: () => items_default
});
module.exports = __toCommonJS(items_exports);
var import_express = __toESM(require("express"));
var import_supabase_client = __toESM(require("../../supabase-client"));
var import_body_parser = __toESM(require("body-parser"));
const router = import_express.default.Router();
router.use(import_body_parser.default.urlencoded({ extended: true }));
router.use(import_body_parser.default.json());
router.get("/", (req, res) => __async(void 0, null, function* () {
  const { data, error } = yield import_supabase_client.default.from("ListItems").select().order("id");
  if (error) {
    console.error(error);
  }
  if (data) {
    res.send(data);
  }
}));
router.post("/", (req, res) => __async(void 0, null, function* () {
  const { data, error } = yield import_supabase_client.default.from("ListItems").insert({ description: req.body.description }).select();
  if (error) {
    res.send(error);
  }
  if (data) {
    res.send("added!");
  }
}));
router.put("/:id", (req, res) => __async(void 0, null, function* () {
  const { data, error } = yield import_supabase_client.default.from("ListItems").update({ description: req.body.description }).eq("id", req.params.id).select();
  if (error) {
    res.send(error);
  }
  if (data) {
    res.send("updated!");
  }
}));
router.delete("/", (req, res) => __async(void 0, null, function* () {
  const { data, error } = yield import_supabase_client.default.from("ListItems").delete().neq("id", 0).select();
  if (error) {
    res.send(error);
  } else {
    res.send("deleted!");
  }
}));
router.delete("/:id", (req, res) => __async(void 0, null, function* () {
  const { data, error } = yield import_supabase_client.default.from("ListItems").delete().eq("id", req.params.id).select();
  if (error) {
    res.send(error);
  } else {
    res.send("deleted!");
  }
}));
var items_default = router;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
