"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_1 = __importDefault(require("./routes/api/items"));
const cors_1 = __importDefault(require("cors"));
//Initialize App
const app = (0, express_1.default)();
//Setup cors
app.use((0, cors_1.default)({ origin: true, credentials: true }));
//use Routes
app.use("/api/items", items_1.default);
//Test connection
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/", (req, res) => {
    res.send(`Connected on ${port}. Use /api/items to access db routes.`);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
exports.default = app;
