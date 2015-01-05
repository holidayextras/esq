//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-or-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('span_or', ['clauses'], { span_term: { field: 'value1' } });
esq.query('span_or', ['clauses'], { span_term: { field: 'value2' } });
esq.query('span_or', ['clauses'], { span_term: { field: 'value3' } });
console.log(JSON.stringify(esq.getQuery(), null, 2));
