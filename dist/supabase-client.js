"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var supabase_client_exports = {};
__export(supabase_client_exports, {
  default: () => supabase_client_default
});
module.exports = __toCommonJS(supabase_client_exports);
var import_supabase_js = require("@supabase/supabase-js");
var import_dotenv = require("dotenv");
(0, import_dotenv.config)({ path: "./.env.local" });
const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_ANON;
if (supabaseUrl === void 0) {
  throw new Error("supabaseURL is undefined");
}
if (supabaseKey === void 0) {
  throw new Error("supabaseKey is undefined");
}
const supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);
var supabase_client_default = supabase;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
