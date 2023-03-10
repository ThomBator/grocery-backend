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
const request = require("supertest");
const express = require("express");
const items_1 = __importDefault(require("../routes/api/items"));
const testApp = express();
testApp.use("/api/items", items_1.default);
describe("Testing GET /api/items", () => {
    test("should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(testApp).get("/api/items");
        expect(response.statusCode).toBe(200);
        expect(response.body.length >= 1).toBe(true);
    }));
    test("should return db items", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(testApp).get("/api/items");
        expect(response.body.length >= 1).toBe(true);
    }));
});
describe("Testing POST /api/items", () => {
    test("should be able to add item", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(testApp)
            .post("/api/items")
            .send({ description: "Bananas" });
        expect(response.status).toBe(200);
        expect(response.text).toBe("added!");
    }));
});
describe("Testing PUT  /api/items/:id", () => {
    test("should be able to update item", () => __awaiter(void 0, void 0, void 0, function* () {
        //Getting item to update
        const getItems = yield request(testApp).get("/api/items");
        const lastItemBefore = getItems.body[getItems.body.length - 1];
        console.log(lastItemBefore);
        //Updating item
        const response = yield request(testApp)
            .put(`/api/items/${lastItemBefore.id}`)
            .send({ description: "Oranges" });
        expect(response.status).toBe(200);
        expect(response.text).toBe("updated!");
    }));
});
describe("Testing delete  /api/items/:id", () => {
    test("should be able to update item", () => __awaiter(void 0, void 0, void 0, function* () {
        //Getting item to update
        const getItems = yield request(testApp).get("/api/items");
        const lastItem = getItems.body[getItems.body.length - 1];
        //delete
        const response = yield request(testApp).delete(`/api/items/${lastItem.id}`);
        expect(response.status).toBe(200);
        expect(response.text).toBe("deleted!");
    }));
});
