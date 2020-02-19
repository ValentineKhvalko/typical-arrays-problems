
exports.min = function min (array) {
  if(array === undefined) return 0;
  if(array.length == 0) return 0;
  return array.reduce(function (p, v) {
    return ( p < v ? p : v );
  });
};

exports.max = function max (array) {
  if(array === undefined) return 0;
  if(array.length == 0) return 0;
  return array.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
};

exports.avg = function avg (array) {
  if(array === undefined) return 0;
  if(array.length == 0) return 0;
  let total = 0;
  for(i = 0; i < array.length; i++){
    total += array[i];
  }
  return total/array.length;
};
