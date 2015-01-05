//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-has-parent-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('has_parent', 'type', 'blog_tag');
esq.query('has_parent', 'query', 'term', { tag: 'something' });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('has_parent', 'type', 'blog_tag');
esq.query('has_parent', 'score_type', 'score');
esq.query('has_parent', 'query', 'term', { tag: 'something' })
console.log(JSON.stringify(esq.getQuery(), null, 2));
