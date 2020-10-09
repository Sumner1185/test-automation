<!SLIDE center>
<br><br><br><br><br><br><br><br><br>
# Functional Testing

<br><br><br><br><br><br><br><br><br>

<!SLIDE>
# Functional Testing
 - Testing to see if code works as expected from a user's point of view
 - Testing our application end to end to check if it meets the acceptance criteria
 - Most common tests that an SDET writes
 - Slow to run and can be flaky 
 - Should we mock API endpoints?

 <img src="../../_images/lego-functional.jpg" width="800" height="450">

 ~~~SECTION:notes~~~

Lego analogy. 

We need to test that our application is what the user is expecting.

Does it meet their functional requirements?

Does it do what it's supposed to do?

Mocking API endpoints

Discussion: If you are testing real API endpoint on integration level, should you mock the API endpoints that your application calls?

Let's say you want to validate the the data you are getting is being processed by the front end app as expected, what if the API is down?

~~~ENDSECTION~~~