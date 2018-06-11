# Color Swatch App Front-End
## Helpful Human Interview Challenge

This is a color swatch application that will display colors from a database and allow the user to view lists of colors based on their range and a detail view of one color with it's similar swatches below.

[Deployed Heroku App](https://color-swatch-app.herokuapp.com/)

[Back-End Repository](https://github.com/helpful-human-challenge/back-end)

## Feature Tasks

* Replicate design from Helpful Human specs
  - [x] Font
  - [x] Styles
  - [x] Iconography

* Replicate functionality
  - [x] Create a database of colors (minimum 100)
  - [] Paginate your data to show a certain number of swatches at a time --> in progress
  - [x] Display both the color swatch and the label of the color
  - [x] Ability to select random color and modify view accordingly
  - [x] Clicking swatch changes to color detail view

## Known Bugs

1. When clicking on `red` color swatch from main list view, detail view renders main color, but displays colors from all ranges below. Note, this only happens with the first two listed `red` swatches, all others work as intended.

2. Clicking on a color swatch from detail view currently does not redirect to an updated detail view featuring recently selected color.
