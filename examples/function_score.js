//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('function_score', '(query|filter)', { });
esq.query('function_score', 'boost', 'boost for the whole query');
esq.query('function_score', ['functions'], { filter: { }, FUNCTION: { } });
esq.query('function_score', ['functions'], { FUNCTION: { } });
esq.query('function_score', 'max_boost', 'number');
esq.query('function_score', 'score_mode', '(multiply|max|...)');
esq.query('function_score', 'boost_mode', '(multiply|replace|...)');

console.log(JSON.stringify(esq.getQuery(), null, 2));