//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-has-child-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('has_child', 'type', 'blog_tag');
esq.query('has_child', 'query', 'term', { tag: 'something' });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('has_child', 'type', 'blog_tag');
esq.query('has_child', 'score_type', 'sum');
esq.query('has_child', 'query', 'term', { tag: 'something' });
console.log(JSON.stringify(esq.getQuery(), null, 2));
