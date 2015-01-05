//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-match-all-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('match_all', { });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match_all', { boost: 1.2 });
console.log(JSON.stringify(esq.getQuery(), null, 2));
