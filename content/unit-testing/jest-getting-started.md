<!SLIDE center>
<br><br><br><br><br><br><br><br><br>
# Introduction to Jest

<br><br><br><br><br><br><br><br><br>

<!SLIDE>
# What is Jest?
- Testing framework created by facebook
- De facto for React projects but can also be used for other JS projects
- Comes pre-configured with everything you need to get started. No need to install libraries for mocking and assertion.
- Code coverage also built in

~~~SECTION:notes~~~

Aim of Jest is to simplify writing unit tests. 

No need to stitch up different testing libraries. 

The less effort you spend setting up test framework, the more time you have writing tests.

Comes with watch mode.

~~~ENDSECTION~~~

<!SLIDE>
# Installation and Setup
- yarn `yarn add --dev jest`
- npm `npm install --save-dev jest`
- comes pre-installed with `create-react-app`

A very simple Jest test

<pre><code>
  test('adding two numbers work as expected', () => {
    expect(sum(1+2)).toBe(3);
  });
</code></pre>

<!SLIDE>
# Writing tests with Jest
- Tests are encapsulated on an `it` or `test` block.
- You can group your tests by encapsulating it on a `describe` block.

<pre><code>
  describe('String manipulator', () => {
    test('converts to uppercase successfully', () => {
      expect(convertNameToUppercase('John')).toBe('JOHN');
    });
  });
</code></pre>