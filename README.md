ParseObject.js
==============

Simple function to parse a string and compare it against an object.


## Usage

Include ParseObject.js in your page. What we want to do is see if we have an object accessible to us via a String.

```javascript
var tests = {
    hello: {
        world: function(){
          alert('Hello World');
        }
    },
    fruit: {
      apples: {
        red: function(){
          alert('I exist too!');
        },
        green: 123
      }
    }
};


ParseObject({
    path: 'hello/world',
    target: tests,
    delimiter: '/',
    parsed: function(res) {
        // res.exists = true
        // res.type = 'function'
        // res.obj | res.obj houses the function, will allert "Hello World" if called
    }
});

ParseObject({
    path: 'fruit-apples-red',
    target: tests,
    delimiter: '-',
    parsed: function(res) {
        // res.exists = true
        // res.type = 'function'
        // res.obj | res.obj houses the function, will allert "I exist too!" if called
    }
});

ParseObject({
    path: 'fruit_apples_green',
    target: tests,
    delimiter: '_',
    parsed: function(res) {
        // res.exists = true
        // res.type = 'number'
        // res.obj = 123
    }
});

ParseObject({
    path: 'fruit/bananas',
    target: tests,
    delimiter: '/',
    parsed: function(res) {
        // res.exists = false
    }
});

```

## Return

If the path exists, `res` will have the following values:

```javascript
res = {
  exists: true,
  type: 'function' || 'object', // etc. typeof
  obj: [the-object-requested]
};
```

If no path is found, res will be structured like the following:

```javascript
res = {
  exists: false
};
```
