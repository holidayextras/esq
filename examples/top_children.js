//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-top-children-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('top_children', 'type', 'blog_tag');
esq.query('top_children', 'query', 'term', 'tag', 'something');
esq.query('top_children', 'score', 'max');
esq.query('top_children', 'factor', 5);
esq.query('top_children', 'incremental_factor', 2);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('top_children', '_scope', 'my_scope');
esq.query('top_children', 'type', 'blog_tag');
esq.query('top_children', 'query', 'term', 'tag', 'something');
console.log(JSON.stringify(esq.getQuery(), null, 2));
