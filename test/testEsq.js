var assert = require('assert');
var ESQ = require('../esq');

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
      var result = esq.query('foo', 'bar', ['foobar'], 123);
      assert.deepEqual(result, { foo: { bar: { foobar: [ 123 ] } } });
    });

    it('with overwritted string', function() {
      esq.query('foo', 'bar');
      var result = esq.query('foo', 'bar2');
      assert.deepEqual(result, { foo: 'bar2' });
    });

    it('with overwritted number', function() {
      esq.query('foo', 1);
      var result = esq.query('foo', 42);
      assert.deepEqual(result, { foo: 42 });
    });

    it('with zero value', function() {
      var result = esq.query('foo', 0);
      assert.deepEqual(result, { foo: 0 });
    });

    it('with false value', function() {
      var result = esq.query('foo', false);
      assert.deepEqual(result, { foo: false });
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

    it('with zero value parameter', function() {
      esq._createNestedObject(base, ['a', 'b'], 0);
      assert.deepEqual(base, { a: { b: 0 } });
    });

    it('with false value parameter', function() {
      esq._createNestedObject(base, ['a', 'b'], false);
      assert.deepEqual(base, { a: { b: false } });
    });

    it('with object type value parameters', function() {
      esq._createNestedObject(base, ['a'], { b: 'c' });
      esq._createNestedObject(base, ['a'], { d: 'e' });
      assert.deepEqual(base, { a: { b: 'c', d: 'e' } });
    });

    it('with array type name parameters', function() {
      esq._createNestedObject(base, [['a'], 'b'], 'c');
      esq._createNestedObject(base, [['a'], 'd'], 'e');
      assert.deepEqual(base, { a: [ { b: 'c' }, { d: 'e' } ] });
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
