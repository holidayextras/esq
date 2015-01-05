//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-term-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('term', 'user', 'kimchy');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('term', 'user', 'value', 'kimchy');
esq.query('term', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('term', 'user', 'term', 'kimchy');
esq.query('term', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));
