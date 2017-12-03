module.exports = (function() {
  return {
    captcha: function(code) {
        // assume a string cos easier to split,
        // then parse to integer when necessary
        var numbers = code.split('');
        var runningTotal = 0;
        var lastOne = numbers.length - 1;
        numbers.forEach(function(number, index) {
            if (index !== lastOne) {
                if (number === numbers[index + 1]) {
                    runningTotal += parseInt(number);
                }
            } else {
                if (number === numbers[0]) {
                    runningTotal += parseInt(number);
                }
            }
        });
        return runningTotal;
    }
  }
})();