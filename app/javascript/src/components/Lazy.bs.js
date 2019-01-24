'use strict';

var React = require("react");

function make(componentPath) {
  React.lazy((function (param) {
          import(componentPath);
          return /* () */0;
        }));
  return /* () */0;
}

exports.make = make;
/* react Not a pure module */
