describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('not divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(10)).toBe(true);
    });

    it('not divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(4)).toBe(false);
    });

    it('divisible by 15', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it('not divisible by 15', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFifteen(4)).toBe(false);
    });

  });

});