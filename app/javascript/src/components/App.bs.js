'use strict';

var App = require("./App");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function make(children) {
  return ReasonReact.wrapJsForReason(App, { }, children);
}

exports.make = make;
/* ./App Not a pure module */
