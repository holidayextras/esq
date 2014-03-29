//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geo-shape-query.html

var ESQ = require('../lib/esq');
var esq = new ESQ();

esq.query('query', 'geo_shape', 'location', 'shape', { type: 'envelope', coordinates: [[13, 53], [14, 52]] });

console.log(JSON.stringify(esq.getQuery(), null, 2));