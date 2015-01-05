//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-terms-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('terms', ['tags'], ['blue', 'pill']);
esq.query('terms', 'minimum_should_match', 1);
console.log(JSON.stringify(esq.getQuery(), null, 2));
