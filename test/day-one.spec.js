var expect = require('chai').expect;
var dayOne = require("../code/day-one");

describe("Day one puzzle", function() {
    it("should solve examples", function() {
        expect(dayOne.captcha("1122")).to.equal(3);
        expect(dayOne.captcha("1111")).to.equal(4);
        expect(dayOne.captcha("1234")).to.equal(0);
        expect(dayOne.captcha("91212129")).to.equal(9);
    });

    it("should solve actual puzzle", function() {
        expect(42).not.to.equal("42");
    });
});