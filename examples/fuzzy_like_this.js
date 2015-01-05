//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-flt-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('fuzzy_like_this', ['fields'], ['name.first', 'name.last']);
esq.query('fuzzy_like_this', 'like_text', 'text like this one');
esq.query('fuzzy_like_this', 'max_query_terms', 12);

console.log(JSON.stringify(esq.getQuery(), null, 2));