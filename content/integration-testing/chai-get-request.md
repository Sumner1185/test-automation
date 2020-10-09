
<!SLIDE>
# Simple API get request using Mocha and Chai HTTP

<pre><code>
describe('Article API', () => {
  it.only('should return 200 status code', async () => {
    const response = await chai
      .request('http://localhost:3000/')
      .get('articles');

    expect(response.statusCode).to.equal(200);
  });
});
</code></pre>