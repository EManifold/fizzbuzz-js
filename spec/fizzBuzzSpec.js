describe("fizzBuzz", function() {
  it("should return a fizz when passed 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  })
})

describe("fizzBuzz", function() {
  it("should return buzz when passed 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  })
})

describe("fizzBuzz", function() {
  it("should return FizzBuzz when passed 15", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  })
})

describe ("fizzBuzz", function() {
  it("should return the number when the number is not a multiple of 3 or 5", function() {
    expect(fizzBuzz(4)).toEqual(4)
  })
})
