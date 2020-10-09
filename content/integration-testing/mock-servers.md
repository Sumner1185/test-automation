<!SLIDE>
# Mocking data endpoints
 - There are loads of libraries we can use to create a fake API. We will look into using `json-server`.
 - npm `npm install --save-dev json-server`
 - run the fake server `json-server --watch db.json`

 Just need a json file containing mock data.

 <pre><code>
 {
  "articles": [{
      "id": 1,
      "title": "News Article",
      "author": "John Smith",
      "headline": "This is a news article"
    },
    {
      "id": 2,
      "title": "Fabulous Article",
      "author": "Jane Smith",
      "headline": "This is a fabulous article"
    },
  ]
}
</code></pre>

~~~SECTION:notes~~~

Imagine we have an external API which returns all the most recent articles. We can write a test which validates that the endpoint is returning the correct data but what if the server is down? 

Mocking endpoints provide a way for us to decouple our tests.

~~~ENDSECTION~~~