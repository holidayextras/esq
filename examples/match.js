//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-match-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('match', { message: 'this is a test' });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match', { message: { query: 'this is a test', operator: 'and' } });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match', { message: { query: 'this is a test', operator: 'and', zero_terms_query: 'all' } });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match', { message: { query: 'to be or not to be', cutoff_frequency: 0.001 } });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match_phrase', { message: 'this is a test' });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match', { message: { query: 'this is a test', type: 'phrase' } });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match_phrase', { message: { query: 'this is a test', analyzer: 'my_analyzer' } });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match_phrase_prefix', { message: 'this is a test' });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match', { message: { query: 'this is a test', type: 'phrase_prefix' } });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('match_phrase_prefix', { message: { query: 'this is a test', max_expansions: 10 } });
console.log(JSON.stringify(esq.getQuery(), null, 2));