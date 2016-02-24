Initialize Jasmine:
```jasmine init```

Add a lib directory in the project root with your .js files in it

For each project js file add a file to spec with the name of the file prepended with spec_:

```
lib/example.js
spec/spec_example.js
```

##### lib/example.js :

```
module.exports = {
  //code goes here
};
```
##### spec/spec_example.js :

```
var example = require(../lib/example.js)
describe('Example', function(){
  it('Does stuff', function(){
    expect(example.someFunction()).toEqual('return value for test')
  })
  .
  .
  .
})
