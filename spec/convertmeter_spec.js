import { meter2yards } from "../meters2yards.js";

describe("test convert meter2yards", function () {
  it("tests 150km", function () {
    let meter = 150;
    let yard = meter2yards(meter)
    expect(yard.toFixed(2)).toBe("164.10");
  });

  it("tests 150km", function () {
    let meter = 8;
    let yard = meter2yards(meter)
    expect(yard.toFixed(2)).toBe("8.75");
  });

});