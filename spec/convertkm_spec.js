import { convertkiolmetersToMiles } from "../km2miles.js";

describe("test convert kilometerstomiles", function() {
    it ("tests 150km", function(){
    let kilometers = 150;
    let miles = convertkiolmetersToMiles(kilometers)
      expect(miles.toFixed(2)).toBe("91.35");
    });
    it ("tests 89km", function(){
        let kilometers = 89;
        let miles = convertkiolmetersToMiles(kilometers)
        expect(miles.toFixed(2)).toBe("54.20");
  });
});
/*
let kilometers = 87;
let miles = convertkiolmetersToMiles(kilometers)
console.log(`${kilometers}  kilometers is ${miles} miles`);*/