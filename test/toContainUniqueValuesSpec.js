describe("toContainUniqueValues()", function() {
  it("should assert true for Arrays with unique values", function() {

    expect([1, 2, 3]).toContainUniqueValues();
    expect([1, 1, 3]).not.toContainUniqueValues();

    var objectA = {key: 'a'};
    var objectB = {key: 'b'};

    expect([objectA, objectB]).toContainUniqueValues();
    expect([objectA, objectA]).not.toContainUniqueValues();
  });
});
