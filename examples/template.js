//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-template-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('query', 'template', 'query', { 'match_{{template}}': { } });
esq.query('query', 'template', 'params', 'template', 'all');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('query', 'template', 'query', '{ \'match_{{template}}\': { } }');
esq.query('query', 'template', 'params', 'template', 'all');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('query', 'template', 'query', 'storedTemplate');
esq.query('query', 'template', 'params', 'template', 'all');
console.log(JSON.stringify(esq.getQuery(), null, 2));
