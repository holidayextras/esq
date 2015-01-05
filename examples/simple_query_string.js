//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('simple_query_string', 'query', '"fried eggs" +(eggplant | potato) -frittata');
esq.query('simple_query_string', 'analyzer', 'snowball');
esq.query('simple_query_string', ['fields'], ['body^5', '_all']);
esq.query('simple_query_string', 'default_operator', 'and');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('simple_query_string', ['fields'], ['content', 'name.*^5']);
esq.query('simple_query_string', 'query', 'foo bar baz');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('simple_query_string', 'query', 'foo | bar & baz');
esq.query('simple_query_string', 'flags', 'OR|AND|PREFIX');
console.log(JSON.stringify(esq.getQuery(), null, 2));
