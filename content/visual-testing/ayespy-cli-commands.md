<!SLIDE>
# AyeSpy Commands
- Snap an image `ayespy snap --config ayespy-config.json --browser firefox`
- Update your baseline image `ayespy update-baseline --config ayespy-config.json --browser firefox`
- Compare baseline image with your new snap `ayespy compare --config ayespy-config.json --browser firefox`

<!SLIDE>
# Tips on using AyeSpy
- Exclude everything that is not static! (e.g. adverts, gifs, any other animated features)
- Don't store your baseline images on github
- Use docker selenium images to get a consistent result
- Don't overcomplicate your scenarios
