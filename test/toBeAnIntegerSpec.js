describe("toBeAnInteger()", function() {
  it("should assert true for Numbers with no floating points", function() {
    expect(1).toBeAnInteger();
    expect(1.5).not.toBeAnInteger();
    expect('1').not.toBeAnInteger();
  });
});
