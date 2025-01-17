'use strict';

var Curry = require("../../lib/js/curry.js");
var Belt_List = require("../../lib/js/belt_List.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");

function raise(e) {
  throw e;
}

var map = Belt_List.mapU;

var List = {
  map: map
};

var Uncurried = {
  raise: raise,
  List: List
};

var E = /* @__PURE__ */Caml_exceptions.create("Uncurried_cast.E");

function testRaise(param) {
  throw {
        RE_EXN_ID: E,
        Error: new Error()
      };
}

var l = Belt_List.mapU({
      hd: 1,
      tl: {
        hd: 2,
        tl: /* [] */0
      }
    }, (function (x) {
        return x + 1 | 0;
      }));

var partial_arg = {
  hd: 1,
  tl: {
    hd: 2,
    tl: /* [] */0
  }
};

function partial(param) {
  return map(partial_arg, param);
}

var ll = partial(function (x) {
      return x + 1 | 0;
    });

function withOpts(xOpt, y, zOpt, w) {
  var x = xOpt !== undefined ? xOpt : 3;
  var z = zOpt !== undefined ? zOpt : 4;
  return ((x + y | 0) + z | 0) + w | 0;
}

function still2Args(param, param$1) {
  return withOpts(undefined, 4, param, param$1);
}

var anInt = Curry._1(still2Args, 3)(5);

var StandardNotation = {
  testRaise: testRaise,
  l: l,
  partial: partial,
  ll: ll,
  withOpts: withOpts,
  still2Args: still2Args,
  anInt: anInt
};

function testRaise$1(param) {
  throw {
        RE_EXN_ID: E,
        Error: new Error()
      };
}

var l$1 = Belt_List.mapU({
      hd: 1,
      tl: {
        hd: 2,
        tl: /* [] */0
      }
    }, (function (x) {
        return x + 1 | 0;
      }));

var partial_arg$1 = {
  hd: 1,
  tl: {
    hd: 2,
    tl: /* [] */0
  }
};

function partial$1(param) {
  return map(partial_arg$1, param);
}

var ll$1 = partial$1(function (x) {
      return x + 1 | 0;
    });

function withOpts$1(xOpt, y, zOpt, w) {
  var x = xOpt !== undefined ? xOpt : 3;
  var z = zOpt !== undefined ? zOpt : 4;
  return ((x + y | 0) + z | 0) + w | 0;
}

function still2Args$1(param, param$1) {
  return withOpts$1(undefined, 4, param, param$1);
}

var partial_arg$2 = 3;

var anInt$1 = (function (param) {
      return still2Args$1(partial_arg$2, param);
    })(5);

exports.Uncurried = Uncurried;
exports.E = E;
exports.StandardNotation = StandardNotation;
exports.testRaise = testRaise$1;
exports.l = l$1;
exports.partial = partial$1;
exports.ll = ll$1;
exports.withOpts = withOpts$1;
exports.still2Args = still2Args$1;
exports.anInt = anInt$1;
/* l Not a pure module */
