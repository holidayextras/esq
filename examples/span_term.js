//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-term-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('span_term', 'user', 'kimchy');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('span_term', 'user', 'value', 'kimchy');
esq.query('span_term', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('span_term', 'user', 'term', 'kimchy');
esq.query('span_term', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));
