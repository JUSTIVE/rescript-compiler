'use strict';

var Mt = require("./mt.js");

var suites_0 = [
  "empty",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: 0,
              _1: Object.keys({}).length
            };
    })
];

var suites_1 = {
  hd: [
    "assign",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: {
                  a: 1
                },
                _1: Object.assign({}, {
                      a: 1
                    })
              };
      })
  ],
  tl: /* [] */0
};

var suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Js_obj_test", suites);

exports.suites = suites;
/*  Not a pure module */
