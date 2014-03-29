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

ESQ.prototype._createNestedObject = function(base, names, value) {
  var lastName = arguments.length === 3 ? names.pop() : false;

  for (var i=0; i<names.length; i++) {
    base = base[names[i]] = base[names[i]] || { };
  }

  if (lastName) {
    if (lastName instanceof Array) value = [value];

    if (value instanceof Array) {
      base[lastName] = base[lastName] ? base[lastName].concat(value) : value;
    } else if (value instanceof Object) {
      base[lastName] ? this._extend(base[lastName], value) : base[lastName] = value;
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

ESQ.prototype._extend = function(obj) {
  var args = Array.prototype.slice.call(arguments, 1);
  args.forEach(function(source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
};
