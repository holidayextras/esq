//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-fuzzy-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('fuzzy', 'user', { value: 'ki', boost: 1.0, fuzziness: 2, prefix_length: 0, max_expansions: 100 });

console.log(JSON.stringify(esq.getQuery(), null, 2));