var ESQ = require('../lib/esq');
var esq = new ESQ();

esq.query('constant_score', 'filter', esq.term('foo', 'bar'));

console.log(JSON.stringify(esq.getQuery(), null, 2));