# ESQ

ESQ is a helper module for elasticsearch. It aims to provide an easy way of creating elasticsearch queries. Run `node examples` to see all of the examples from the [elasticsearch docs](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-queries.html) generated using esq!

## Quick Examples

```javascript
var ESQ = require('esq');
var esq = new ESQ();

esq.query('bool', ['must'], { match: { user: 'kimchy' } });
esq.query('bool', ['must_not'], { range: { age: { from: 10, to: 20 } } });
esq.query('bool', ['should'], { term: { tag: 'wow' } });
esq.query('bool', ['should'], { term: { tag: 'elasticsearch' } });
esq.query('bool', 'minimum_should_match', 1);
esq.query('bool', 'boost', 1.0);

// query == {
//   "bool": {
//     "must": [
//       {
//         "match": {
//           "user": "kimchy"
//         }
//       }
//     ],
//     "must_not": [
//       {
//         "range": {
//           "age": {
//             "from": 10,
//             "to": 20
//           }
//         }
//       }
//     ],
//     "should": [
//       {
//         "term": {
//           "tag": "wow"
//         }
//       },
//       {
//         "term": {
//           "tag": "elasticsearch"
//         }
//       }
//     ],
//     "minimum_should_match": 1,
//     "boost": 1
//   }
// }
```
---
```javascript
var ESQ = require('esq');
var esq = new ESQ();

esq.query('query', 'match', 'foo', 'bar');
esq.query('query', 'range', 'x', { gte: 1, lte: 5 });
esq.query('query', 'wildcard', 'test', 'value', 'what*');

var query = esq.getQuery();

// query == {
//  "query": {
//    "match": {
//      "foo": "bar"
//    },
//    "range": {
//      "x": {
//        "gte": "1",
//        "lte": "5"
//      }
//    },
//    "wildcard": {
//      "test": {
//        "value": "what*"
//      }
//    }
//  }
//}
```

## Download

```
npm install esq
```

## In the Browser

Coming soon!

## Documentation

### esq.getQuery();
This will return the query at the current stage.

__Example__
```javascript
esq.query('query', 'match', 'foo', 'bar');
var query = esq.getQuery();
```

__Generates__
```javascript
{
  query: {
    match: {
      foo: 'bar'
    }
  }
}
```

---

### esq.query(str, ..., str, value);
You can pass the function as many strings as you want and you'll receive a nested object with the arguments as keys. The final value (query component) will be assigned to the final object. Returns the generated query.

__Example__
```
esq.query('filtered', 'query', 'match', 'foo', 'bar');
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
