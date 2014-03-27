var queryComponents = { };
module.exports = queryComponents;

queryComponents.match = function(key, value, options) {
  options = options || null;
  var obj = { match: { } };
  obj.match[key] = value;
  if (options) {
    options.query = value;
    obj.match[key] = options;
  }
  return obj;
};

queryComponents.multi_match = function(key, value, options) {
  options = options || null;
  var obj = { multi_match: { } };
  obj.multi_match = { fields: [key] };
  if (options) {
    options.query = options.query || value;
    if (options.fields instanceof Array) {
      options.fields.push(key);
    } else {
      options.fields = options.fields || [key];
    }
    obj.multi_match = options;
  }
  return obj;
};

queryComponents.term = function(key, value, options) {
  options = options || null;
  var obj = { term: { } };
  obj.term[key] = value;
  if (options) {
    options.value = value;
    obj.term[key] = options;
  }
  return obj;
};

queryComponents.range = function(key, options) {
  options = options || null;
  var obj = { range: { } };
  obj.range[key] = { };
  if (options) obj.range[key] = options;
  return obj;
};

queryComponents.wildcard = function(key, value, options) {
  options = options || null;
  var obj = { wildcard: { } };
  obj.wildcard[''+key] = value;
  if (options) {
    options.value = value;
    obj.wildcard[key] = options;
  }
  return obj;
};
