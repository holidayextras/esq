//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('multi_match', 'query', 'this is a test');
esq.query('multi_match', ['fields'], ['subject', 'message']);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'Will Smith');
esq.query('multi_match', ['fields'], ['title', '*_name']);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'this is a test');
esq.query('multi_match', ['fields'], ['subject^3', 'message']);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'brown fox');
esq.query('multi_match', 'type', 'best_fields');
esq.query('multi_match', ['fields'], ['subject', 'message']);
esq.query('multi_match', 'tie_breaker', 0.3);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'Will Smith');
esq.query('multi_match', 'type', 'best_fields');
esq.query('multi_match', ['fields'], ['first_name', 'last_name']);
esq.query('multi_match', 'operator', 'and');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'the quick brown fox');
esq.query('multi_match', 'type', 'most_fields');
esq.query('multi_match', ['fields'], ['title', 'title.original', 'title.shingles']);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'quick brown f');
esq.query('multi_match', 'type', 'phrase_prefix');
esq.query('multi_match', ['fields'], ['subject', 'message']);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'Will Smith');
esq.query('multi_match', 'type', 'cross_fields');
esq.query('multi_match', ['fields'], ['first', 'first.edge', 'last', 'last.edge']);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('bool', ['should'], { multi_match: { query: 'Will Smith', type: 'cross_fields', fields: ['first', 'last'], minimum_should_match: '50%' } });
esq.query('bool', ['should'], { multi_match: { query: 'Will Smith', type: 'cross_fields', fields: ['*.edge'] } });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('multi_match', 'query', 'Jon');
esq.query('multi_match', 'type', 'cross_fields');
esq.query('multi_match', 'analyzer', 'standard');
esq.query('multi_match', ['fields'], ['first', 'last', '*.edge']);
console.log(JSON.stringify(esq.getQuery(), null, 2));
