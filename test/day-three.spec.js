var expect = require('chai').expect;
var dayThree = require("../code/day-three");

describe("Day three part one puzzle", function() {
    it("should solve examples", function() {
        expect(dayThree.spiral(1)).to.equal(0);
        expect(dayThree.spiral(12)).to.equal(3);
        expect(dayThree.spiral(23)).to.equal(2);
        expect(dayThree.spiral(32)).to.equal(5);
        expect(dayThree.spiral(36)).to.equal(5);
        expect(dayThree.spiral(28)).to.equal(3);
        expect(dayThree.spiral(26)).to.equal(5);
        expect(dayThree.spiral(26)).to.equal(5);
    });

    it("should solve actual puzzle", function() {
        expect(dayThree.spiral(361527)).to.equal(326);
        // 327 was first solution
    });
});

xdescribe("Day three part two puzzle", function() {
    it("should solve examples", function() {
        expect(dayTwo.checksumTwo(examplePuzzleInputTwo)).to.equal(9);
    });

    it("should solve actual puzzle", function() {
        expect(dayTwo.checksumTwo(puzzleInput)).to.equal(312);
    });
});