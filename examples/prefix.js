//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-prefix-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('prefix', 'user', 'ki');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('prefix', 'user', 'value', 'ki');
esq.query('prefix', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('prefix', 'user', 'prefix', 'ki');
esq.query('prefix', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));
