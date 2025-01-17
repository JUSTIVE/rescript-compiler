'use strict';


function add(x, y) {
  return x + y | 0;
}

function addC(x, y) {
  return x + y | 0;
}

var v7 = 7;

var v17 = 17;

var v27 = 27;

var v37 = 37;

function unary(x) {
  return x + 1 | 0;
}

var StandardNotation = {
  add: add,
  addC: addC,
  v7: v7,
  v17: v17,
  v27: v27,
  v37: v37,
  unary: unary
};

var v7$1 = 7;

var v17$1 = 17;

var v27$1 = 27;

var v37$1 = 37;

var v100 = 100;

exports.StandardNotation = StandardNotation;
exports.v7 = v7$1;
exports.v17 = v17$1;
exports.v27 = v27$1;
exports.v37 = v37$1;
exports.v100 = v100;
/* No side effect */
