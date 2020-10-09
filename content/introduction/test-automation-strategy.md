<!SLIDE center>
<br><br><br><br><br><br><br><br><br>
# Test Automation Strategy

<br><br><br><br><br><br><br><br><br>

<!SLIDE>
# Test Pyramid

- The higher we go up the pyramid, the slower the tests are and the more expensive they get to execute.
- Exploratory testing on top of the pyramid for any scenarios not covered by test automation.

![](../../_images/itta-test-pyramid.png)

~~~SECTION:notes~~~

The lower we are on the pyramid, the more isolated our tests are and less dependent.

UI tests are commonly seen as flaky tests because of external services timing out.

Ideally, the ratio should be 70% Unit tests, 20% Integration tests, 10% UI tests

~~~ENDSECTION~~~