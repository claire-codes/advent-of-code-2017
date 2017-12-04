# advent-of-code-2017

Workings out for [advent of code](http://adventofcode.com/) exercises, written in JavaScript.

## Run tests

`npm t`

### Filter tests

Mocha takes a command-line argument of `--grep foo` which will only run test files that contain the string `foo`. To utilize this with the `npm t` command, use `--` to pass a command-line argument to the script. Therefore to run only the test for day three, called `day-three.js` (assuming you don't have `day-thirty-three.js`), type:

```
npm t -- --grep three
```
