# ESQ

ESQ is a helper module for elasticsearch. It aims to provide an easy way of creating elasticsearch queries.

## Quick Examples

```javascript
var ESQ = require('../index');

var esq = new ESQ();
var query = null;

query = esq.bool('filtered', 'query', 'bool', 'must', esq.match('foo', 'bar'));
query = esq.bool('filtered', 'query', 'bool', 'must', esq.match('date', '2014-02-01'));
query = esq.bool('filtered', 'query', 'bool', 'should', esq.range('time', '12:00', '13:00'));
query = esq.bool('filtered', 'query', 'bool', 'minimum_should_match', 1);
```
---
```javascript
var ESQ = require('../index');

var esq = new ESQ();

esq.query('query', esq.match('foo', 'bar'));
esq.query('query', esq.range('x', '1', '5'));
esq.query('query', esq.wildcard('test', 'what'));

var query = esq.getQuery();
```

## Download

```
npm install esq
```

## In the Browser

Coming soon!

## Documentation


## Queries

### esq.query(str, ..., str, value);
You can pass the function as many strings as you want and you'll receive a nested object with the arguments as keys. The final value (query component) will be assigned to the final object.

__Example__
```
esq.query('filtered', 'query', esq.match('foo', 'bar'));
```

__Generates__
```javascript
{
  filtered: {
    query: {
      match: {
        foo: 'bar'
      }
    }
  }
}
```

---
### esq.bool(str, ..., str, must|must_not|should|minimum_should_match, value);
Same as above, however the second to last parameter must be one of the following: must, must_not, should or minimum_should_match. This will ensure that the final value is assigned correctly or pushed into an array.

__Example__
```javascript
esq.bool('filtered', 'filter', 'bool', 'must', esq.term('foo', 'bar'));
```

__Generates__
```javascript
{
  filtered: {
    filter: {
      bool: {
        must: [
          {
            term: { foo: 'bar' }
          }
        ]
      }
    }
  }
}
```

## Query Components

### esq.match(key, value);
Build a match query component using the key and value provided.

__Example__
```javascript
esq.match('foo', 'bar');
```

__Generates__
```javascript
{
  match: {
    foo: 'bar'
  }
}
```

---
### esq.term(key, value);
Build a term query component using the key and value provided.

__Example__
```javascript
esq.term('foo', 'bar');
```

__Generates__
```javascript
{
  term: {
    foo: 'bar'
  }
}
```

---
### esq.range(key, gte, lte);
Build a range query using the key, grater than equal and/or less than equal provided.

__Example__
```javascript
esq.range('foo', 1, 5);
```

__Generates__
```javascript
{
  range: {
    foo: {
      gte: 1,
      lte: 5
    }
  }
}
```

---
### esq.wildcard(key, value);
Build a wildcard query component using the key and value provided.

__Example__
```javascript
esq.wildcard('foo', 'bar*');
```

__Generates__
```javascript
{
  wildcard: {
    foo: {
      value: 'bar*'
    }
  }
}
```
