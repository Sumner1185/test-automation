
<!SLIDE>
# Simple API post request using Mocha and Chai HTTP

<pre><code>
describe('Article API', () => {
  it.only('should add a new article successfully', async () => {
    const articleDetails = {
        "id": 3,
        "title": "Fabulous Article",
        "author": "John Smith",
        "headline": "This is a fabulous article"
    };
    
    const response = await chai
      .request('http://localhost:3000/')
      .post('articles')
      .send(articleDetails)

    expect(response.statusCode).to.equal(200);
  });
});
</code></pre>