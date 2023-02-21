"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./.env.local" });
const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_ANON;
if (supabaseUrl === undefined) {
    throw new Error("supabaseURL is undefined");
}
if (supabaseKey === undefined) {
    throw new Error("supabaseKey is undefined");
}
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = supabase;
