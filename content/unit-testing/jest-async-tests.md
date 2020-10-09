<!SLIDE>
# Testing asynchronous code

Most applications now run asynchronously. When we write unit tests for our async functions, Jest needs to know when the function in test is complete before moving on to another test.

Using Promises

<pre><code>
  it("should mock promises", () => {
    const asyncMock = jest.fn().mockImplementation(() => Promise.resolve(43));
    return asyncMock().then(value => {
      expect(value).toBe(43);
    });
  });
</pre></code>

Using Async/Await

<pre><code>
  it("should mock promises", async () => {
    const asyncMock = jest.fn().mockImplementation(() => Promise.resolve(43));
    const value = await asyncMock();
    expect(value).toBe(43);
  });
</pre></code>