'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$Docify = require("../Utils.bs.js");
var SpinnerModuleScss = require("./Spinner.module.scss");

var partial_arg = SpinnerModuleScss;

function getStyle(param) {
  return Utils$Docify.getClassName(partial_arg, param);
}

var component = ReasonReact.statelessComponent("Spinner");

function make($staropt$star, _children) {
  var isLoading = $staropt$star !== undefined ? $staropt$star : true;
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
              var loaderStyle = function (className) {
                if (isLoading) {
                  return getStyle("Loading--" + (String(className) + ""));
                } else {
                  return getStyle("Hidden");
                }
              };
              return React.createElement("div", {
                          className: getStyle("Container")
                        }, React.createElement("div", {
                              className: loaderStyle("One")
                            }), React.createElement("div", {
                              className: loaderStyle("Two")
                            }), React.createElement("div", {
                              className: loaderStyle("Three")
                            }));
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
