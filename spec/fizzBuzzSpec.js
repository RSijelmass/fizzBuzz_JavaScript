describe("FizzBuzz", function() {
		var fizzBuzz;

		beforeEach(function() {
			fizzBuzz = new FizzBuzz();
	  });

		it('should print true when the 1st parameter is dividable by the 2nd', function() {
			expect(fizzBuzz.isDividableBy(9,3)).toEqual(true)
		});

		it('should print false when the 1st parameter isn\'t dividable by the 2nd', function() {
			expect(fizzBuzz.isDividableBy(13,2)).toEqual(false)
		});

		it('should print fizz when number is 3', function() {
			expect(fizzBuzz.print(3)).toEqual('fizz')
		});

		it('should print buzz when number is 5', function() {
			expect(fizzBuzz.print(5)).toEqual('buzz')
		});
		
		it('should print fizzbuzz when number is 15', function() {
			expect(fizzBuzz.print(15)).toEqual('fizzbuzz')
		});
		
		it('should print number when number is other', function() {
			expect(fizzBuzz.print(7)).toEqual(7)
		});


});
