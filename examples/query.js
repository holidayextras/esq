var ESQ = require('../index');

var esq = new ESQ();
var query = null;

query = esq.query('query', esq.match('foo', 'bar'));
query = esq.query('query', esq.range('x', '1', '5'));
query = esq.query('query', esq.wildcard('test', 'what'));

console.log(JSON.stringify(query, null, 2));
