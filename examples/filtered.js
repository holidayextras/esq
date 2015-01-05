//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-filtered-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('filtered', 'query', 'term', { tag: 'wow' });
esq.query('filtered', 'filter', 'range', { from: 10, to: 20 });
console.log(JSON.stringify(esq.getQuery(), null, 2));
