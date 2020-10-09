<!SLIDE>
# Setup and Teardown

- beforeEach - some action that you need to do before each tests 

<pre><code>
beforeEach(() => {
  addNewCustomerRecord();
});
</code></pre>

- afterEach - some action that you need to after each tests 

<pre><code>
afterEach(() => {
  clearCustomerRecord();
});
</code></pre>

<!SLIDE>
# Setup and Teardown

- beforeAll - action that you only need to do once before all tests are run

<pre><code>
beforeAll(() => {
  setUpDatabase();
});
</code></pre>

- afterAll - action that you only need to do once after all tests are run

<pre><code>
beforeEach(() => {
  clearDatabase();
});
</code></pre>