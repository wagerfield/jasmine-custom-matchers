# Jasmine Custom Matchers

> Custom matchers for [Jasmine 2.0][jasmine].

## Usage

> Custom matchers are added to a global [`CustomMatchers`][custommatchers] namespace Object.

To use the matchers, you will first need to *reference* them alongside your own specification files or *include* them in your `test` suite directory. To make the matchers available within your specifications, you will need to add the `CustomMatchers` Object to `jasmine` within a [`beforeEach`][beforeeach] function prior to your assertions:

```javascript
describe("something...", function() {
  beforeEach(function() {
    jasmine.addMatchers(CustomMatchers);
  });
  it("should behave...", function() {
    expect(1).toBeAnInteger(); // toBeAnInteger() should now be in scope and available
  });
});
```

## Matchers

* [toBeAnInteger()](#toBeAnInteger)
* [toContainUniqueValues()](#toContainUniqueValues)
* [toOnlyContain(expected)](#toOnlyContain)

<a name="toBeAnInteger"/>
### .toBeAnInteger()

```javascript
it('should be an Integer', function() {
  expect(1).toBeAnInteger();
  expect(1.5).not.toBeAnInteger();
  expect('1').not.toBeAnInteger();
});
```

<a name="toContainUniqueValues"/>
### .toContainUniqueValues()

```javascript
it('should contain unique values', function() {

  expect([1, 2, 3]).toContainUniqueValues();
  expect([1, 1, 3]).not.toContainUniqueValues();

  var objectA = {key: 'a'};
  var objectB = {key: 'b'};

  expect([objectA, objectB]).toContainUniqueValues();
  expect([objectA, objectA]).not.toContainUniqueValues();
});
```

<a name="toOnlyContain"/>
### .toOnlyContain(expected)

```javascript
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
```

## Setup & Testing

As a front–end developer, I favour [karma][karma] for testing JavaScript in browser environments. Incidentally, this project is setup to use karma to test the custom matchers.

```
cd .../jasmine-custom-matchers
npm install
karma start
```

## Contributing

Pull requests are welcomed and encouraged. If you have some generic, useful matchers of your own, please fork the project, add them, and send a pull request.

When adding new matchers:

* Adopt the same format and conventions as the existing matchers.
* Add a paired `customMatcherSpec.js` in `test` directory that rigorously tests the matcher.
* Update the README with examples of the matcher in use.

Let's help make [Jasmine][jasmine] even better!

## Author

Matthew Wagerfield: [@mwagerfield][twitter]

## License

Licensed under [MIT][mit]. Enjoy.

[custommatchers]: ./matchers/toBeAnInteger.js#L1
[beforeeach]: http://jasmine.github.io/2.0/custom_matcher.html#section-15
[jasmine]: http://jasmine.github.io/2.0/introduction.html
[karma]: http://karma-runner.github.io/0.12/index.html
[twitter]: http://twitter.com/mwagerfield
[mit]: http://www.opensource.org/licenses/mit-license.php
