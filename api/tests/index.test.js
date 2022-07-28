const supertest = require("supertest");
const app = require("../src/app.js");
const chai = require("chai");

const chaiHTTP = require("chai-http");

const request = supertest(app);

chai.use(chaiHTTP);

const expect = chai.expect;

describe("Test API", () => {
  it("Send a word and response status 200", async () => {
    const res = await request.get("/iecho?text=test");
    expect(res.status).to.equal(200);
  });

  it("receives 'code' and returns 'edoc'", async () => {
    const res = await request.get("/iecho?text=code");
    expect(res.body.reverseStr).to.equal("edoc");
  });

  it("If word is palindrome responds with an object with a palindrome prop set to true", async () => {
    const res = await request.get("/iecho?text=Reconocer");
    expect(res.body.palindrome).to.equal(true);
  });

  it("If word is not palindrome responds with an object with a palindrome prop set to false", async () => {
    const res = await request.get("/iecho?text=Reconocerr");
    expect(res.body.palindrome).to.equal(false);
  });

  it("Don't send word and respond status 400", async () => {
    const res = await request.get("/iecho?text=123");
    expect(res.status).to.equal(400);
  });

  it("Send error message", async () => {
    const res = await request.get("/iecho?text=1_2_3");
    expect(res.body).to.have.property("message");
  });
});
