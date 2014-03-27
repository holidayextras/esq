var ESQ = require('../lib/esq');
var esq = new ESQ();;

esq.query('query', esq.match('foo', 'bar', { operator: 'and', zero_terms_query: 'all' }));

console.log(JSON.stringify(esq.getQuery(), null, 2));
