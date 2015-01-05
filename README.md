# ESQ (Elasticsearch Query)

[![Build Status](https://travis-ci.org/holidayextras/esq.png?branch=master)](https://travis-ci.org/holidayextras/esq)

I wanted an easy way to build elasticsearch queries without having to writing lots and lots of code just for the structure of the query. For that reason I created ESQ, a very simple but powerful tool that will do all of the object creation for you.

---

## Download
`npm install esq` or `bower intall esq`

---

## Quick Example

__Example__
```javascript
var ESQ = require('esq');
var esq = new ESQ();

esq.query('bool', ['must'], { match: { user: 'kimchy' } });
esq.query('bool', 'minimum_should_match', 1);

var query = esq.getQuery();
```

__Generates__
```json
{
  "bool": {
    "must": [
      {
        "match": {
          "user": "kimchy"
        }
      }
    ],
    "minimum_should_match": 1
  }
}
```

---

## In the browser

```html
<script src="esq.js"></script>
<script>
  var esq = new ESQ();
  esq.query('bool', ['must'], { match: { user: 'kimchy' } });
  var query = esq.getQuery();
</script>
```

---

## Documentation

### esq.getQuery();
This will return the query at the current stage.

__Example__
```javascript
esq.query('bool', ['must'], { match: { foo: 'bar' } });
var query = esq.getQuery();
```

__Generates__
```json
{
  "bool": {
    "must": [
      {
        "match": {
          "foo": "bar"
        }
      }
    ]
  }
}
```

---

### esq.query(str, ..., str, value);
You can pass this function as many strings as you want and you'll receive a nested object with the arguments as keys. The final argument should always be the object you want to assign to the second to last argument. This function will always return the query at its current state.

__Example__
```javascript
esq.query('filtered', 'query', { match: { foo: 'bar' } });
```

__Generates__
```json
{
  "filtered": {
    "query": {
      "match": {
        "foo": "bar"
      }
    }
  }
}
```

#### Array Arguments

The function also allows you to pass in an argument as an array (e.g. `['must']`). This tells the function that you want that key to be an array and so it'll push the following arguments into the array.

__Example__
```javascript
esq.query('filtered', 'query', 'bool', ['must'], { match: { 'foo': 'bar' } });
```

__Generates__
```json
{
  "filtered": {
    "query": {
      "bool": {
        "must": [
          {
            "match": {
              "foo": "bar"
            }
          }
        ]
      }
    }
  }
}
```

---

## Tests

This module is fully tested, run the tests using `mocha`.
