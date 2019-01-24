'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");

function getClassName(dictionary, className) {
  var match = Js_dict.get(dictionary, className);
  if (match !== undefined) {
    return match;
  } else {
    return "Nothing found";
  }
}

var join = $$String.concat;

function joinStyles(param) {
  return $$String.concat(" ", param);
}

exports.getClassName = getClassName;
exports.join = join;
exports.joinStyles = joinStyles;
/* No side effect */
