//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-range-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('range', 'age', 'gte', 10);
esq.query('range', 'age', 'lte', 20);
esq.query('range', 'age', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));