//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-wildcard-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('wildcard', 'user', 'ki*y');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('wildcard', 'user', 'value', 'ki*y');
esq.query('wildcard', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('wildcard', 'user', 'wildcard', 'ki*y');
esq.query('wildcard', 'user', 'boost', 2.0);
console.log(JSON.stringify(esq.getQuery(), null, 2));
