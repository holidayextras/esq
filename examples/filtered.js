var ESQ = require('../lib/esq');
var esq = new ESQ();

esq.query('filtered', 'query', esq.match('foo', 'bar'));
esq.query('filtered', 'filter', esq.term('foo', 'bar'));

console.log(JSON.stringify(esq.getQuery(), null, 2));