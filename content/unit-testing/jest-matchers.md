<!SLIDE>
# Matchers

Jest's `expect` provides you different types of matchers to assert if your test values are correct. For example. `.toBe()` is a matcher that we used on the previous slide.

`expect(fruit.getFruitName()).toBe('apple');`

`expect(results).toBeGreaterThan(5);`

`expect(aMethod()).toBeNull();`

`expect(object1).toEqual(object2)`;

`expect(drinkMockFunction).toHaveBeenCalled();`

`expect(Promise.resolve('lemon')).resolves.toBe('lemon');`

Please see `https://jestjs.io/docs/en/expect` for reference.

<!SLIDE>
# Exercise
- Head over to `exercises/jest-framework` and write unit tests for calculator.js and utilities.js files.
- Run `yarn` or `npm i` to install the dependencies
- Run `yarn test` or `npm run test` to run the tests.