//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('regexp', 'name.first', 's.*y');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('regexp', 'name.first', 'value', 's.*y');
esq.query('regexp', 'name.first', 'boost', 1.2);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('regexp', 'name.first', 's.*y');
esq.query('regexp', 'flags', 'INTERSECTION|COMPLEMENT|EMPTY');
console.log(JSON.stringify(esq.getQuery(), null, 2));
