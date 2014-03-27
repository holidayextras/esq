var assert = require('assert');
var queryComponents = require('../lib/queryComponents');

describe('Test query components', function() {
  describe('match', function() {
    it('with no args', function() {
      var result = queryComponents.match();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = queryComponents.match('foo');
      assert.deepEqual(result, { match: { foo: null } });
    });

    it('with only a value', function() {
      var result = queryComponents.match(null, 'foo');
      assert.deepEqual(result, { match: { null: 'foo' } });
    });

    it('with a key and value', function() {
      var result = queryComponents.match('foo', 'bar');
      assert.deepEqual(result, { match: { foo: 'bar' } });
    });
  });

  describe('term', function() {
    it('with no args', function() {
      var result = queryComponents.term();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = queryComponents.term('foo');
      assert.deepEqual(result, { term: { foo: null } });
    });

    it('with only a value', function() {
      var result = queryComponents.term(null, 'foo');
      assert.deepEqual(result, { term: { null: 'foo' } });
    });

    it('with a key and value', function() {
      var result = queryComponents.term('foo', 'bar');
      assert.deepEqual(result, { term: { foo: 'bar' } });
    });
  });

  describe('range', function() {
    it('with no args', function() {
      var result = queryComponents.range();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = queryComponents.range('foo');
      assert.deepEqual(result, { range: { foo: { } } });
    });

    it('with only gte', function() {
      var result = queryComponents.range(null, 1);
      assert.deepEqual(result, { range: { null: { gte: 1 } } });
    });

    it('with only lte', function() {
      var result = queryComponents.range(null, null, 1);
      assert.deepEqual(result, { range: { null: { lte: 1 } } });
    });

    it('with all the args', function() {
      var result = queryComponents.range('foo', 1, 2);
      assert.deepEqual(result, { range: { foo: { gte: 1, lte: 2 } } });
    });
  });

  describe('wildcard', function() {
    it('with no args', function() {
      var result = queryComponents.wildcard();
      assert.equal(result, null);
    });

    it('with only a key', function() {
      var result = queryComponents.wildcard('foo');
      assert.deepEqual(result, { wildcard: { foo: { value: null } } });
    });

    it('with only a value', function() {
      var result = queryComponents.wildcard(null, 'foo');
      assert.deepEqual(result, { wildcard: { null: { value: 'foo' } } });
    });

    it('with all the args', function() {
      var result = queryComponents.wildcard('foo', 'bar');
      assert.deepEqual(result, { wildcard: { foo: { value: 'bar' } } });
    });
  });
});