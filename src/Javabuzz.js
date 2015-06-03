var Javabuzz = function(){};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  if (this.isDivisibleByThree(number) && this.isDivisibleByFive(number)) {
    return true;
  } else {
    return false;
  }
};