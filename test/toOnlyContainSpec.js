describe("toOnlyContain(expected)", function() {
  it("should assert true for Arrays only containing expected values", function() {

    expect([1, 1]).toOnlyContain(1);
    expect([1, 2]).not.toOnlyContain(1);

    expect(['yo', 'yo', 'yo']).toOnlyContain('yo');
    expect(['yo', 'yo', 'Milhouse']).not.toOnlyContain('yo');

    expect([1, 2, 3, 3.14159]).toOnlyContain(jasmine.any(Number));
    expect([1, 2, 3, '3.14159']).not.toOnlyContain(jasmine.any(Number));

    var Animal = function(type) { this.type = type; };
    var Rodent = function(type) { Animal.call(this, type); };
    Rodent.prototype = Object.create(Animal.prototype);

    var dog = new Animal('dog');
    var cat = new Animal('cat');
    var rat = new Rodent('rat');
    var mouse = new Rodent('mouse');

    var animals = [dog, cat, rat, mouse];
    var rodents = [rat, mouse];

    expect(animals).toOnlyContain(jasmine.any(Animal));
    expect(rodents).toOnlyContain(jasmine.any(Rodent));
    expect(animals).not.toOnlyContain(jasmine.any(Rodent));
  });
});
