'use strict';

var Js_dict = require("bs-platform/lib/js/js_dict.js");

function getClassName(dictionary, className) {
  var match = Js_dict.get(dictionary, className);
  if (match !== undefined) {
    return match;
  } else {
    return "Nothing found";
  }
}

exports.getClassName = getClassName;
/* No side effect */
