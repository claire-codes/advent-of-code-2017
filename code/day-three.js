module.exports = (function() {
    return {
        // FYI this is not pretty
        //
        // First let's work out the square size in which the number (361527) appears,
        // that way we will know what the bottom RHS corner is:
        findSquareSize: function(puzzleAim) {
            var squareLength = 1;
            var inSquare = false;
            var squareArea;
            while (!inSquare) {
                squareArea = squareLength * squareLength;
                if (squareArea >= puzzleAim) {
                    inSquare = true;
                } else {
                    // Can only be odd squares so add 2 to length
                    squareLength += 2;
                }
            }
            return squareLength;
        },
        // The length of one side of the square divided by two is the first part of the steps. Yay!

        // Once we have the length, we need to know how far in the other direction we are.
        // I.e. how many steps from puzzleInput to the centre axis of the square.
        // Now we want the coordinates of where the puzzleInput appears
        findSideCoords: function(squareLength, puzzleInput) {
            var maxArea = squareLength * squareLength;
            var distanceToCentre = squareLength / 2;
            // Find which points are the corners
            var foundCorners = false;
            // corner1 is bigger than corner 2
            var corner1 = maxArea;
            var corner2 = maxArea - squareLength + 1;

            while (!foundCorners) {
                if (puzzleInput >= corner2) {
                    foundCorners = true;
                } else {
                    corner1 = corner2;
                    corner2 -= (squareLength - 1);
                }
            }
            return [corner1, corner2];
        },

        // Now find how far it is from the center
        findStepsToMiddle: function(corner1, corner2, squareLength, puzzleInput) {
            var centerPosition = corner2 + Math.floor(squareLength / 2);
            var stepsToCenter = Math.abs(centerPosition - puzzleInput);
            return stepsToCenter;
        },


        findTotal: function(squareLength, stepsToCenter) {
            // Now add them together to find Manhattan distance
            return Math.floor(squareLength / 2) + stepsToCenter;
        },

        spiral: function(puzzleInput) {
            var length = this.findSquareSize(puzzleInput);
            var coords = this.findSideCoords(length, puzzleInput);
            var middleSteps = this.findStepsToMiddle(coords[0], coords[1], length, puzzleInput);
            return total = this.findTotal(length, middleSteps);
        },

        checksumTwo: function(twoDeeArray) {
            
        }
    }
})();