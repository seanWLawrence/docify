'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$Docify = require("../Utils.bs.js");
var ToastModuleScss = require("./Toast.module.scss");

var partial_arg = ToastModuleScss;

function getStyle(param) {
  return Utils$Docify.getClassName(partial_arg, param);
}

var component = ReasonReact.statelessComponent("Toast");

function make(_children, message, isVisible) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              var containerStyles = isVisible ? getStyle("Container--Visible") : getStyle("Container");
              return React.createElement("div", {
                          className: containerStyles
                        }, React.createElement("div", {
                              className: getStyle("Container__Inner")
                            }, message));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.getStyle = getStyle;
exports.component = component;
exports.make = make;
/* partial_arg Not a pure module */
