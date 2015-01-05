//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-first-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('span_first', 'match', 'span_term', 'user', 'kimchy');
esq.query('span_first', 'end', 3);
console.log(JSON.stringify(esq.getQuery(), null, 2));
