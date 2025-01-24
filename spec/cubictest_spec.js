import { cubic } from "../cubesize.js";

describe("test convert length to volume", function () {
    it("tests 150", function () {
        let length = 150;
        let volume = cubic(length)
        expect(volume.toFixed(2)).toBe("3375000.00");
    });
    it("tests 89", function () {
        let length = 89;
        let volume = cubic(length)
        expect(volume.toFixed(2)).toBe("704969.00");
    });
});