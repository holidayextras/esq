var ESQ = require('../lib/esq');
var esq = new ESQ();;

esq.query('query', esq.multi_match('foo', 'bar', { fields: ['foobar'], type: 'best_fields' }));

console.log(JSON.stringify(esq.getQuery(), null, 2));
