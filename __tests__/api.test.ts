const request = require("supertest");
const express = require("express");
import { after } from "node:test";
import items from "../routes/api/items";

const testApp = express();
testApp.use("/api/items", items);

describe("Testing GET /api/items", () => {
  test("should return 200", async () => {
    const response = await request(testApp).get("/api/items");
    expect(response.statusCode).toBe(200);
    expect(response.body.length >= 1).toBe(true);
  });
  test("should return db items", async () => {
    const response = await request(testApp).get("/api/items");

    expect(response.body.length >= 1).toBe(true);
  });
});

describe("Testing POST /api/items", () => {
  test("should be able to add item", async () => {
    const response = await request(testApp)
      .post("/api/items")
      .send({ description: "Bananas" });
    expect(response.status).toBe(200);
    expect(response.text).toBe("added!");
  });
});

describe("Testing PUT  /api/items/:id", () => {
  test("should be able to update item", async () => {
    //Getting item to update
    const getItems = await request(testApp).get("/api/items");
    const lastItemBefore = getItems.body[getItems.body.length - 1];
    console.log(lastItemBefore);

    //Updating item
    const response = await request(testApp)
      .put(`/api/items/${lastItemBefore.id}`)
      .send({ description: "Oranges" });

    expect(response.status).toBe(200);
    expect(response.text).toBe("updated!");
  });
});

describe("Testing delete  /api/items/:id", () => {
  test("should be able to update item", async () => {
    //Getting item to update
    const getItems = await request(testApp).get("/api/items");
    const lastItem = getItems.body[getItems.body.length - 1];

    //delete
    const response = await request(testApp).delete(`/api/items/${lastItem.id}`);

    expect(response.status).toBe(200);
    expect(response.text).toBe("deleted!");
  });
});
