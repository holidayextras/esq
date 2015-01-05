//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-not-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('span_not', 'include', 'span_term', 'field1', 'value1');
esq.query('span_not', 'exclude', 'span_term', 'field2', 'value2');
console.log(JSON.stringify(esq.getQuery(), null, 2));
