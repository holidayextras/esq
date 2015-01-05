//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-nested-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('nested', 'path', 'obj1');
esq.query('nested', 'score_mode', 'avg');
esq.query('nested', 'query', 'bool', ['must'], { match: { 'obj1.name': 'blue' } });
esq.query('nested', 'query', 'bool', ['must'], { range: { 'obj1.count': { gt: 5 } } });
console.log(JSON.stringify(esq.getQuery(), null, 2));
