//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-flt-field-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('fuzzy_like_this_field', 'name.first', { like_text: 'text like this one', max_query_terms: 12 });

console.log(JSON.stringify(esq.getQuery(), null, 2));