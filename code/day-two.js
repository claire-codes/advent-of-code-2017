module.exports = (function() {
    return {
        checksumOne: function(twoDeeArray) {
            var checksum = 0;
            twoDeeArray.forEach(function(row) {
                var highest = row[0],
                    lowest = row[0],
                    diff = 0;
                row.forEach(function(number) {
                    if (number > highest) {
                        highest = number;
                    }
                    if (number < lowest) {
                        lowest = number;
                    }
                });
                diff = highest - lowest;
                checksum += diff;
            })
            return checksum;
        },

        checksumTwo: function(twoDeeArray) {
            var checksum = 0;
            twoDeeArray.forEach(function(row) {
                var diff = 0;
                row.forEach(function(number, index) {
                    var remainingRow = row.slice(index + 1);
                    remainingRow.forEach(function(subNumber) {
                        if (number % subNumber === 0) {
                            diff = number / subNumber;
                        } else if (subNumber % number === 0) {
                            diff = subNumber / number;
                        }
                    });
                });
                checksum += diff;
            })
            return checksum;
        }
    }
})();