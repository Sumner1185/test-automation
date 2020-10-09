<!SLIDE>
# Mocking

There are three main types of mocking in Jest:

1. `jest.fn()` - mocks a function
2. `jest.mock()` - mocks a whole module
3. `jest.spyOn()` - spies on a function if it has been called without mocking the implementation

<pre><code>
  test("should mock correctly", () => {
    const mock = jest.fn();
    mock("result");

    expect(mock).toHaveBeenCalled();
    expect(mock).toBeDefined();
    expect(mock).toHaveBeenCalledWith("result");
  });
</pre></code>

<pre><code>
  it("should mock console log", () => {
    console.log = jest.fn(() => "TEST");
    expect(console.log()).toBe("TEST");
  });
</code></pre>

<!SLIDE>
# Mocking continuation

<pre><code>
  beforeAll(() => {
    jest.mock('./calculator.js');
  });

  test('should mock calculator', () => {
    app.add(1,2);
    expect(calculator.add).toHaveBeenCalledWith(1,2);
  });
</pre></code>

<pre><code>
  test("calls calculator.add", () => {
    const addMock = jest.spyOn(calculator, "add");

    expect(app.add(1, 2)).toEqual(3);
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });
</pre></code>

<!SLIDE>
# Exercise
- Complete the test in translation.test.js by implementing a mock function for getTranslationData method.

 ~~~SECTION:notes~~~

Mocking is a way of replacing with something that we can control.

Jest provides ways to mock functions by changing its return values or even changing its implementation


~~~ENDSECTION~~~