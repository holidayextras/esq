(function() {
  var root = this;
  var previous_ESQ = root.ESQ;

  var ESQ = function() {
    this._query = Object.create(null);
  };

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
      if(names[i] instanceof Array) {
        names[i] = names[i][0];
        base[names[i]] = base[names[i]] || [];
        base = base[names[i]][base[names[i]].length] = Object.create(null);
      } else {
        base = base[names[i]] = base[names[i]] || Object.create(null);
      }
    }

    if (lastName) {
      if (lastName instanceof Array) value = [value];

      if (value instanceof Array) {
        base[lastName] = base[lastName] ? base[lastName].concat(value) : value;
      } else if (value instanceof Object) {
        base[lastName] ? this._extend(base[lastName], value) : base[lastName] = value;
      }
      base = base[lastName] = ((typeof base[lastName] === "object") ? base[lastName] : undefined) ||
            ((value === null || typeof value === "undefined") ? Object.create(null) : value);
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


  ESQ.noConflict = function() {
    root.ESQ = previous_ESQ;
    return ESQ;
  };

  if (typeof define !== 'undefined' && define.amd) { //require.js
    define([], function () {
      return ESQ;
    });
  } else if (typeof module !== 'undefined' && module.exports) { //nodejs
    module.exports = ESQ;
  } else { //direct browser require
    root.ESQ = ESQ;
  }

}).call(this);
