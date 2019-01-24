'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");

var ppx_printed_query = "query documentsQuery  {\nviewer  {\ndocuments  {\nid  \ncontent  \ncreatedAt  \nupdatedAt  \n}\n\n}\n\n}\n";

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
                          var value$1 = Caml_option.valFromOption(match);
                          var match$1 = Js_dict.get(value$1, "id");
                          var tmp;
                          if (match$1 !== undefined) {
                            var value$2 = Caml_option.valFromOption(match$1);
                            var match$2 = Js_json.decodeString(value$2);
                            tmp = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                          } else {
                            tmp = Js_exn.raiseError("graphql_ppx: Field id on type Document is missing");
                          }
                          var match$3 = Js_dict.get(value$1, "content");
                          var tmp$1;
                          if (match$3 !== undefined) {
                            var value$3 = Caml_option.valFromOption(match$3);
                            var match$4 = Js_json.decodeNull(value$3);
                            if (match$4 !== undefined) {
                              tmp$1 = undefined;
                            } else {
                              var match$5 = Js_json.decodeString(value$3);
                              tmp$1 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                            }
                          } else {
                            tmp$1 = undefined;
                          }
                          var match$6 = Js_dict.get(value$1, "createdAt");
                          var match$7 = Js_dict.get(value$1, "updatedAt");
                          return {
                                  id: tmp,
                                  content: tmp$1,
                                  createdAt: match$6 !== undefined ? Caml_option.valFromOption(match$6) : Js_exn.raiseError("graphql_ppx: Field createdAt on type Document is missing"),
                                  updatedAt: match$7 !== undefined ? Caml_option.valFromOption(match$7) : Js_exn.raiseError("graphql_ppx: Field updatedAt on type Document is missing")
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

var ViewerDocuments = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var Query = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

exports.ViewerDocuments = ViewerDocuments;
exports.Query = Query;
/* Query Not a pure module */
