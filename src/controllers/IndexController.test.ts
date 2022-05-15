import request from "supertest"
import { app } from "../app"

describe("Test Index Controller", () => {
  it("Request / should return status 200", async () => {
    const result = await request(app).get("/").send()
    expect(result.status).toBe(200)
  })
})
