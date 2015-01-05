//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-constant-score-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('constant_score', 'filter', 'term', { user: 'kimchy' });
esq.query('constant_score', 'boost', 1.2);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('constant_score', 'query', 'term', { user: 'kimchy' });
esq.query('constant_score', 'boost', 1.2);
console.log(JSON.stringify(esq.getQuery(), null, 2));
