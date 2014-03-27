var assert = require('assert');
var ESQ = require('../lib/esq');

describe('Testing ESQ', function() {
  var esq = null;
  beforeEach(function() { esq = new ESQ(); });

  describe('getQuery', function() {
    it('with no query', function() {
      var result = esq.getQuery();
      assert.deepEqual(result, { });
    });

    it('with building a query first', function() {
      esq.query('filtered', 'filter', { });
      var result = esq.getQuery();
      assert.deepEqual(result, { filtered: { filter: { } } });
    });
  });

  describe('query', function() {
    it('with no args', function() {
      var result = esq.query();
      assert.deepEqual(result, { });
    });

    it('with standard params', function() {
      var result = esq.query('foo', 'bar', { });
      assert.deepEqual(result, { foo: { bar: { } } });
    });

    it('with bad args', function() {
      var result = esq.query([], [], []);
      assert.deepEqual(result, { '': { '': [ ] } });
    });
  });

  describe('bool', function() {
    it('with no args', function() {
      var result = esq.bool();
      assert.deepEqual(result, { });
    });

    it('with just an operator', function() {
      var result = esq.bool('must');
      assert.deepEqual(result, { });
    });

    it('with an operator and value', function() {
      var result = esq.bool('must', { foo: 'bar' });
      assert.deepEqual(result, { must: [ { foo: 'bar' } ] });
    });

    it('with a must query', function() {
      var result = esq.bool('bool', 'must', { foo: 'bar' });
      assert.deepEqual(result, { bool: { must: [ { foo: 'bar' } ] } });
    });

    it('with multiple must queries', function() {
      esq.bool('bool', 'must', { foo: 'bar' });
      var result = esq.bool('bool', 'must', { bar: 'foo' });
      assert.deepEqual(result, { bool: { must: [ { foo: 'bar' }, { bar: 'foo' } ] } });
    });

    it('with a must_not query', function() {
      var result = esq.bool('bool', 'must_not', { foo: 'bar' });
      assert.deepEqual(result, { bool: { must_not: [ { foo: 'bar' } ] } });
    });

    it('with a should query', function() {
      var result = esq.bool('bool', 'should', { foo: 'bar' });
      assert.deepEqual(result, { bool: { should: [ { foo: 'bar' } ] } });
    });

    it('with no operator', function() {
      var result = esq.bool('bool', 'minimum_should_match', 2);
      assert.deepEqual(result, { bool: { minimum_should_match: 2 } });
    });

    it('with an incorrect value type', function() {
      var result = esq.bool('bool', 'minimum_should_match', true);
      assert.deepEqual(result, { });
    });
  });

  describe('match', function() {
    it('with no args', function() {
      var result = esq.match();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = esq.match('foo');
      assert.deepEqual(result, { match: { foo: null } });
    });

    it('with only a value', function() {
      var result = esq.match(null, 'foo');
      assert.deepEqual(result, { match: { null: 'foo' } });
    });

    it('with a key and value', function() {
      var result = esq.match('foo', 'bar');
      assert.deepEqual(result, { match: { foo: 'bar' } });
    });
  });

  describe('term', function() {
    it('with no args', function() {
      var result = esq.term();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = esq.term('foo');
      assert.deepEqual(result, { term: { foo: null } });
    });

    it('with only a value', function() {
      var result = esq.term(null, 'foo');
      assert.deepEqual(result, { term: { null: 'foo' } });
    });

    it('with a key and value', function() {
      var result = esq.term('foo', 'bar');
      assert.deepEqual(result, { term: { foo: 'bar' } });
    });
  });

  describe('range', function() {
    it('with no args', function() {
      var result = esq.range();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = esq.range('foo');
      assert.deepEqual(result, { range: { foo: { } } });
    });

    it('with only gte', function() {
      var result = esq.range(null, 1);
      assert.deepEqual(result, { range: { null: { gte: 1 } } });
    });

    it('with only lte', function() {
      var result = esq.range(null, null, 1);
      assert.deepEqual(result, { range: { null: { lte: 1 } } });
    });

    it('with all the args', function() {
      var result = esq.range('foo', 1, 2);
      assert.deepEqual(result, { range: { foo: { gte: 1, lte: 2 } } });
    });
  });

  describe('wildcard', function() {
    it('with no args', function() {
      var result = esq.wildcard();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = esq.wildcard('foo');
      assert.deepEqual(result, { wildcard: { foo: { value: null } } });
    });

    it('with only a value', function() {
      var result = esq.wildcard(null, 'foo');
      assert.deepEqual(result, { wildcard: { null: { value: 'foo' } } });
    });

    it('with all the args', function() {
      var result = esq.wildcard('foo', 'bar');
      assert.deepEqual(result, { wildcard: { foo: { value: 'bar' } } });
    });
  });

  describe('_createNestedObject', function() {
    var base = null;
    beforeEach(function() { base = { }; });

    it('with no parameters', function() {
      esq._createNestedObject({ }, [ ], null);
      assert.deepEqual(base, { });
    });

    it('with base and name parameters', function() {
      esq._createNestedObject(base, ['a'], null);
      assert.deepEqual(base, { a: { } });
    });

    it('with base, name and value parameters', function() {
      esq._createNestedObject(base, ['a'], { b: 'c' });
      assert.deepEqual(base, { a: { b: 'c' } });
    });

    it('with object type value parameters', function() {
      esq._createNestedObject(base, ['a'], { b: 'c' });
      esq._createNestedObject(base, ['a'], { d: 'e' });
      assert.deepEqual(base, { a: { b: 'c', d: 'e' } });
    });

    it('with array type value parameters', function() {
      esq._createNestedObject(base, ['a'], [{ b: 'c' }]);
      esq._createNestedObject(base, ['a'], [{ d: 'e' }]);
      assert.deepEqual(base, { a: [ { b: 'c' }, { d: 'e' } ] });
    });

    it('with multiple levels of nesting', function() {
      esq._createNestedObject(base, ['a', 'b', 'c']);
      assert.deepEqual(base, { a: { b: { c: { } } } });
    });

    it('with multiple levels of nesting and values', function() {
      esq._createNestedObject(base, ['a', 'b', 'c'], { d: 'e' });
      esq._createNestedObject(base, ['a', 'b', 'c'], { f: 'g' });
      assert.deepEqual(base, { a: { b: { c: { d: 'e', f: 'g' } } } });
    });
  });
});
