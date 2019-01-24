'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$Docify = require("../Utils.bs.js");
var ButtonModuleScss = require("./Button.module.scss");

var component = ReasonReact.statelessComponent("Button");

function make($staropt$star, $staropt$star$1, children, onClick) {
  var isActive = $staropt$star !== undefined ? $staropt$star : false;
  var className = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
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
              var buttonStyles = Utils$Docify.joinStyles(/* :: */[
                    Utils$Docify.getClassName(ButtonModuleScss, isActive ? "Base--Active" : "Base"),
                    /* :: */[
                      className,
                      /* [] */0
                    ]
                  ]);
              return React.createElement("button", {
                          className: buttonStyles,
                          onClick: onClick
                        }, children);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
