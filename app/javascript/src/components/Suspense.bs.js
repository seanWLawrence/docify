'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Spinner$Docify = require("./Spinner.bs.js");

function make(children) {
  return ReasonReact.wrapJsForReason(React.Suspense, {
              fallback: ReasonReact.element(undefined, undefined, Spinner$Docify.make(true, /* array */[]))
            }, children);
}

exports.make = make;
/* react Not a pure module */
