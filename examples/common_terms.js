//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-common-terms-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('common', 'body', 'query', 'this is bonsai cool');
esq.query('common', 'body', 'cutoff_frequency', 0.001);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('common', 'body', 'query', 'nelly the elephant as a cartoon');
esq.query('common', 'body', 'cutoff_frequency', 0.001);
esq.query('common', 'body', 'low_freq_operator', 'and');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('common', 'body', 'query', 'nelly the elephant as a cartoon');
esq.query('common', 'body', 'cutoff_frequency', 0.001);
esq.query('common', 'body', 'minimum_should_match', 2);
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('common', 'body', 'query', 'nelly the elephant as a cartoon');
esq.query('common', 'body', 'cutoff_frequency', 0.001);
esq.query('common', 'body', 'minimum_should_match', { low_freq: 2, high_freq: 3 });
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('common', 'body', 'query', 'how not to be');
esq.query('common', 'body', 'cutoff_frequency', 0.001);
esq.query('common', 'body', 'minimum_should_match', { low_freq: 2, high_freq: 3 });
console.log(JSON.stringify(esq.getQuery(), null, 2));
