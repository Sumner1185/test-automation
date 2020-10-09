<!SLIDE center>
<br><br><br><br><br><br><br><br><br>
# Integration Testing

<br><br><br><br><br><br><br><br><br>

<!SLIDE>
# Integration Testing
 - Testing to see if our methods or block of code work with other components
 - Testing to see if our application integrates well with other services
 - Reasonably fast to execute if we use mocks 
 - Should we mock API endpoints?

 <img src="../../_images/lego-integration.jpg" width="450" height="400">

 ~~~SECTION:notes~~~

Lego analogy. 

We need to test that our components integrate well with other components.

Mocking API endpoints

If you want to verify that your application renders the data and processes the data correctly, then you can mock these endpoints.

If you are more concerned that your API is returning the correct data, then test on the real endpoints.

~~~ENDSECTION~~~