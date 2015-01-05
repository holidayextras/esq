//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('query_string', 'default_field', 'content');
esq.query('query_string', 'query', 'this AND that OR thus');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('query_string', ['fields'], ['content', 'name^5']);
esq.query('query_string', 'query', 'this AND that OR thus');
esq.query('query_string', 'use_dis_max', true);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('query_string', ['fields'], 'city.*');
esq.query('query_string', 'query', 'this AND that OR thus');
esq.query('query_string', 'use_dis_max', true);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('query_string', ['fields'], ['content', 'name.*^5']);
esq.query('query_string', 'query', 'this AND that OR thus');
esq.query('query_string', 'use_dis_max', true);
console.log(JSON.stringify(esq.getQuery(), null, 2));
