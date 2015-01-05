//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-dis-max-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('dis_max', 'tie_breaker', 0.7);
esq.query('dis_max', 'boost', 1.2);
esq.query('dis_max', ['queries'], { term: { age: 34 } });
esq.query('dis_max', ['queries'], { term: { age: 35 } });
console.log(JSON.stringify(esq.getQuery(), null, 2));
