http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-boosting-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('boosting', 'positive', 'term', { field1: 'value1' });
esq.query('boosting', 'negative', 'term', { field2: 'value2' });
esq.query('boosting', 'negative_boost', 0.2);

console.log(JSON.stringify(esq.getQuery(), null, 2));
