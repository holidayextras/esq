//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-ids-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('ids', 'type', 'my_type');
esq.query('ids', 'values', ['1', '4', '100']);
console.log(JSON.stringify(esq.getQuery(), null, 2));
