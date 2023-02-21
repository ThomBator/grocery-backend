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
const supabase_client_1 = __importDefault(require("./supabase-client"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_client_1.default.from("ListItems").select().order("id");
    if (error) {
        console.error(error);
    }
    if (data) {
        res.json(data);
    }
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
