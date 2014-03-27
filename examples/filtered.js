var ESQ = require('../lib/esq');

var esq = new ESQ();
var query = null;

query = esq.bool('filtered', 'query', 'bool', 'must', esq.match('foo', 'bar'));
query = esq.bool('filtered', 'query', 'bool', 'must', esq.match('date', '2014-02-01'));
query = esq.bool('filtered', 'query', 'bool', 'should', esq.range('time', '12:00', '13:00'));
query = esq.bool('filtered', 'query', 'bool', 'minimum_should_match', 1);

console.log(JSON.stringify(query, null, 2));