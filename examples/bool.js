//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('bool', ['must'], { match: { user: 'kimchy' } });
esq.query('bool', ['must_not'], { range: { age: { from: 10, to: 20 } } });
esq.query('bool', ['should'], { term: { tag: 'wow' } });
esq.query('bool', ['should'], { term: { tag: 'elasticsearch' } });
esq.query('bool', 'minimum_should_match', 1);
esq.query('bool', 'boost', 1.0);

console.log(JSON.stringify(esq.getQuery(), null, 2));
