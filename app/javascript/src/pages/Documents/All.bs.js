'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Utils$Docify = require("../../Utils.bs.js");
var AllModuleScss = require("./All.module.scss");

console.log(Utils$Docify.getClassName(AllModuleScss, "Documents__Container"));

var ppx_printed_query = "query documents  {\nviewer  {\ndocuments  {\ncontent  \n}\n\n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "viewer");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeObject(value$1);
        var tmp$1;
        if (match$3 !== undefined) {
          var match$4 = Js_dict.get(Caml_option.valFromOption(match$3), "documents");
          var tmp$2;
          if (match$4 !== undefined) {
            var value$2 = Caml_option.valFromOption(match$4);
            var match$5 = Js_json.decodeNull(value$2);
            if (match$5 !== undefined) {
              tmp$2 = undefined;
            } else {
              var match$6 = Js_json.decodeArray(value$2);
              tmp$2 = match$6 !== undefined ? match$6.map((function (value) {
                        var match = Js_json.decodeObject(value);
                        if (match !== undefined) {
                          var match$1 = Js_dict.get(Caml_option.valFromOption(match), "content");
                          var tmp;
                          if (match$1 !== undefined) {
                            var value$1 = Caml_option.valFromOption(match$1);
                            var match$2 = Js_json.decodeNull(value$1);
                            if (match$2 !== undefined) {
                              tmp = undefined;
                            } else {
                              var match$3 = Js_json.decodeString(value$1);
                              tmp = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$1));
                            }
                          } else {
                            tmp = undefined;
                          }
                          return {
                                  content: tmp
                                };
                        } else {
                          return Js_exn.raiseError("graphql_ppx: Object is not a value");
                        }
                      })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$2));
            }
          } else {
            tmp$2 = undefined;
          }
          tmp$1 = {
            documents: tmp$2
          };
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
        }
        tmp = Caml_option.some(tmp$1);
      }
    } else {
      tmp = undefined;
    }
    return {
            viewer: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var AllDocuments = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var AllDocumentsQuery = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

var component = ReasonReact.statelessComponent("LoginMessage");

function make$1(_children) {
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
              return React.createElement("h1", undefined, "Please log in to view your documents!");
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var LoginMessage = /* module */[
  /* component */component,
  /* make */make$1
];

var component$1 = ReasonReact.statelessComponent("NoDocumentsMessage");

function make$2(_children) {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("h1", undefined, "There are no documents to show... create one!");
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* jsElementWrapped */component$1[/* jsElementWrapped */13]
        ];
}

var NoDocumentsMessage = /* module */[
  /* component */component$1,
  /* make */make$2
];

var component$2 = ReasonReact.statelessComponent("NoContentMessage");

function make$3(_children) {
  return /* record */[
          /* debugName */component$2[/* debugName */0],
          /* reactClassInternal */component$2[/* reactClassInternal */1],
          /* handedOffState */component$2[/* handedOffState */2],
          /* willReceiveProps */component$2[/* willReceiveProps */3],
          /* didMount */component$2[/* didMount */4],
          /* didUpdate */component$2[/* didUpdate */5],
          /* willUnmount */component$2[/* willUnmount */6],
          /* willUpdate */component$2[/* willUpdate */7],
          /* shouldUpdate */component$2[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("h1", undefined, "There is no content here... add some!");
            }),
          /* initialState */component$2[/* initialState */10],
          /* retainedProps */component$2[/* retainedProps */11],
          /* reducer */component$2[/* reducer */12],
          /* jsElementWrapped */component$2[/* jsElementWrapped */13]
        ];
}

var NoContentMessage = /* module */[
  /* component */component$2,
  /* make */make$3
];

var component$3 = ReasonReact.statelessComponent("Documents");

function make$4(documents, _children) {
  return /* record */[
          /* debugName */component$3[/* debugName */0],
          /* reactClassInternal */component$3[/* reactClassInternal */1],
          /* handedOffState */component$3[/* handedOffState */2],
          /* willReceiveProps */component$3[/* willReceiveProps */3],
          /* didMount */component$3[/* didMount */4],
          /* didUpdate */component$3[/* didUpdate */5],
          /* willUnmount */component$3[/* willUnmount */6],
          /* willUpdate */component$3[/* willUpdate */7],
          /* shouldUpdate */component$3[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("ul", undefined, $$Array.map((function ($$document) {
                                var match = $$document.content;
                                if (match !== undefined) {
                                  return React.createElement("li", undefined, match);
                                } else {
                                  return ReasonReact.element(undefined, undefined, make$3(/* array */[]));
                                }
                              }), documents));
            }),
          /* initialState */component$3[/* initialState */10],
          /* retainedProps */component$3[/* retainedProps */11],
          /* reducer */component$3[/* reducer */12],
          /* jsElementWrapped */component$3[/* jsElementWrapped */13]
        ];
}

var Documents = /* module */[
  /* component */component$3,
  /* make */make$4
];

var component$4 = ReasonReact.statelessComponent("AllDocuments");

function make$5(_children) {
  return /* record */[
          /* debugName */component$4[/* debugName */0],
          /* reactClassInternal */component$4[/* reactClassInternal */1],
          /* handedOffState */component$4[/* handedOffState */2],
          /* willReceiveProps */component$4[/* willReceiveProps */3],
          /* didMount */component$4[/* didMount */4],
          /* didUpdate */component$4[/* didUpdate */5],
          /* willUnmount */component$4[/* willUnmount */6],
          /* willUpdate */component$4[/* willUpdate */7],
          /* shouldUpdate */component$4[/* shouldUpdate */8],
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, Curry.app(AllDocumentsQuery[/* make */3], [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              (function (param) {
                                  var result = param[/* result */0];
                                  if (typeof result === "number") {
                                    return React.createElement("div", undefined, "Loading");
                                  } else if (result.tag) {
                                    var match = result[0].viewer;
                                    if (match !== undefined) {
                                      var match$1 = Caml_option.valFromOption(match).documents;
                                      if (match$1 !== undefined) {
                                        return ReasonReact.element(undefined, undefined, make$4(match$1, /* array */[]));
                                      } else {
                                        return ReasonReact.element(undefined, undefined, make$2(/* array */[]));
                                      }
                                    } else {
                                      return ReasonReact.element(undefined, undefined, make$1(/* array */[]));
                                    }
                                  } else {
                                    return React.createElement("div", undefined, result[0].message);
                                  }
                                })
                            ]));
            }),
          /* initialState */component$4[/* initialState */10],
          /* retainedProps */component$4[/* retainedProps */11],
          /* reducer */component$4[/* reducer */12],
          /* jsElementWrapped */component$4[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component$4, (function (param) {
        return make$5(/* array */[]);
      }));

exports.AllDocuments = AllDocuments;
exports.AllDocumentsQuery = AllDocumentsQuery;
exports.LoginMessage = LoginMessage;
exports.NoDocumentsMessage = NoDocumentsMessage;
exports.NoContentMessage = NoContentMessage;
exports.Documents = Documents;
exports.component = component$4;
exports.make = make$5;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/*  Not a pure module */
