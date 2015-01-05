//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-mlt-field-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('more_like_this_field', 'name.first', 'like_text', 'text like this one');
esq.query('more_like_this_field', 'name.first', 'min_term_freq', 1);
esq.query('more_like_this_field', 'name.first', 'max_query_terms', 12);
console.log(JSON.stringify(esq.getQuery(), null, 2));