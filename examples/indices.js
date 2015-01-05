//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-indices-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('indices', 'indices', ['index1', 'index2']);
esq.query('indices', 'query', 'term', { tag: 'wow' });
esq.query('indices', 'no_match_query', 'term', { tag: 'kow' });
console.log(JSON.stringify(esq.getQuery(), null, 2));
