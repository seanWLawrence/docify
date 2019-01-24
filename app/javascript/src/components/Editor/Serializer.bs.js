'use strict';

var Js_dict = require("bs-platform/lib/js/js_dict.js");
var SlateMdSerializer = require("slate-md-serializer");

var serializer = SlateMdSerializer.default();

var toSlate = Js_dict.get(serializer, "deserialize");

var toMarkdown = Js_dict.get(serializer, "serialize");

exports.serializer = serializer;
exports.toSlate = toSlate;
exports.toMarkdown = toMarkdown;
/* serializer Not a pure module */
