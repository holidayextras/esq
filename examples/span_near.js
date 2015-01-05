//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-near-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('span_near', ['clauses'], { span_term: { field: 'value1' } });
esq.query('span_near', ['clauses'], { span_term: { field: 'value2' } });
esq.query('span_near', ['clauses'], { span_term: { field: 'value3' } });
esq.query('span_near', 'slop', 12);
esq.query('span_near', 'in_order', false);
esq.query('span_near', 'collect_payloads', false);
console.log(JSON.stringify(esq.getQuery(), null, 2));
