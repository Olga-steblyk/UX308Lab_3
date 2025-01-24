import { weather2clothes } from "../weatherclothing.js";

describe("test convert weather inputs to clothing options", function () {
    it("tests weather conversions in to clothing ", function () {
      let temperature = 10;
      let humidity = 4;
      let output = weather2clothes(temperature, humidity)
      expect(output).toBe("it is dry and warm, so it will be windy");
    });
    it("tests weather conversions in to clothing ", function () {
        let temperature = 0;
        let humidity = 80;
        let output = weather2clothes(temperature, humidity)
        expect(output).toBe("it is humid outside, chance of snow or rain,");
      });

    //function weather2clothes(temperature,humidity){

    });