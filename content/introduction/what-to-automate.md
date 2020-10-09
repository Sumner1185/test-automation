<!SLIDE>
# What to Automate?

- Manual regression packs (tests that you always need to check before releasing a new feature)
- Scenarios that can cause high impact to the business
- Sanity tests, Smoke tests
- Tests that take a long time to execute manually (e.g. creating a new article)
- Visual look of your application
- Tests which need different data combination
- Tests that are impossible to execute manually (such as performance, load and stress testing)
- Tests that are repetitive

<!SLIDE>
# What not to Automate?

- Usability tests (the look and feel)
- Tests that don't have predictable results
- Features that aren't as high priority and will not require much changes
- Tests that requires reCAPTCHA (unless it can be automated on API level)

![](../../_images/itta-recaptcha.gif)

~~~SECTION:notes~~~

Talk about Google SEO tool. API not available and automating the UI requires recaptcha

~~~ENDSECTION~~~
