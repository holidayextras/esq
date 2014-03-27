var utils = require('./utils');

function ESQ() {
  this._query = { };
}
module.exports = ESQ;

ESQ.prototype.getQuery = function() {
  return this._query;
};

ESQ.prototype.query = function() {
  var args = this._getArgsAsArray(arguments);
  var value = args.pop();

  this._createNestedObject(this._query, args, value);
  return this._query;
};

ESQ.prototype.bool = function() {
  var args = this._getArgsAsArray(arguments);

  var value = args[(args.length-1)];
  if (((value instanceof Object) && !(value instanceof Array)) || (typeof value == 'number')) {
    value = args.pop();
  } else {
    return { };
  }

  var operator = args[(args.length-1)];
  if (operator == 'must' || operator == 'must_not' || operator == 'should') {
    if (!(value instanceof Array)) value = [value];
  }

  this._createNestedObject(this._query, args, value);
  return this._query;
};

ESQ.prototype.match = function(key, value) {
  if (!(key || value)) return null;
  var match = { match: {  } };
  match.match[key] = value || null;
  return match;
};

ESQ.prototype.term = function(key, value) {
  if (!(key || value)) return null;
  var term = { term: {  } };
  term.term[key] = value || null;
  return term;
};

ESQ.prototype.range = function(key, gte, lte) {
  if (!(key || gte || lte)) return null;

  var range = {
    range: {}
  };
  range.range[''+key] = { };
  if (gte) range.range[''+key].gte = gte || null;
  if (lte) range.range[''+key].lte = lte || null;

  return range;
};

ESQ.prototype.wildcard = function(key, value) {
  if (!(key || value)) return null;
  var wildcard = {
    wildcard: { }
  };
  wildcard.wildcard[''+key] = { };
  wildcard.wildcard[''+key].value = value ? (''+value).toLowerCase() : null;

  return wildcard;
};


ESQ.prototype._createNestedObject = function(base, names, value) {
  var lastName = arguments.length === 3 ? names.pop() : false;

  for (var i=0; i<names.length; i++) {
    base = base[names[i]] = base[names[i]] || { };
  }

  if (lastName) {
    if (value instanceof Array) {
      base[lastName] = base[lastName] ? base[lastName].concat(value) : value;
    } else if (value instanceof Object) {
      base[lastName] ? utils.extend(base[lastName], value) : base[lastName] = value;
    }
    base = base[lastName] = base[lastName] || value || { };
  }

  if ((names.length == 0) && !lastName && value) {
    base = value;
  }
};

ESQ.prototype._getArgsAsArray = function(args) {
  if (args && (args instanceof Array)) return args;
  return Array.prototype.slice.call(args);
};
