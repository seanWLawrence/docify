'use strict';

var Css = require("bs-css/src/Css.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

function space(multiplier) {
  return Css.px(Caml_int32.imul(5, multiplier));
}

var body = Css.fontFamily("Georgia, 'Times New Roman', Times, serif");

var header = Css.fontFamily("-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n     Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n     'Segoe UI Symbol'");

var FontFamilies = /* module */[
  /* body */body,
  /* header */header
];

var body$1 = Css.px(25);

var h1 = Css.px(100);

var h2 = Css.px(75);

var h3 = Css.px(55);

var h4 = Css.px(40);

var h5 = Css.px(30);

var h6 = Css.px(25);

var FontSizes = /* module */[
  /* body */body$1,
  /* h1 */h1,
  /* h2 */h2,
  /* h3 */h3,
  /* h4 */h4,
  /* h5 */h5,
  /* h6 */h6
];

var white = Css.hex("fff");

var light = Css.hex("eee");

var medium = Css.rgba(0, 0, 0, 0.7);

var dark = Css.rgba(0, 0, 0, 0.9);

var primary = Css.color(Css.cornflowerblue);

var Colors = /* module */[
  /* white */white,
  /* light */light,
  /* medium */medium,
  /* dark */dark,
  /* primary */primary,
  /* secondary */light,
  /* heading */dark,
  /* body */medium
];

function screenSize(value, widthInPixels) {
  if (value) {
    return "(max-width: " + (String(widthInPixels) + ")");
  } else {
    return "(min-width: " + (String(widthInPixels) + ")");
  }
}

function mediaQuery(minInPx, maxInPx) {
  return screenSize(/* Min */0, minInPx) + screenSize(/* Max */1, maxInPx);
}

var partial_arg = mediaQuery(330, 767);

function mobile(param) {
  return Css.media(partial_arg, param);
}

var partial_arg$1 = mediaQuery(768, 1023);

function tablet(param) {
  return Css.media(partial_arg$1, param);
}

var partial_arg$2 = mediaQuery(1024, 1439);

function desktop(param) {
  return Css.media(partial_arg$2, param);
}

var partial_arg$3 = mediaQuery(1440, 10000);

function retina(param) {
  return Css.media(partial_arg$3, param);
}

var MediaQueries = /* module */[
  /* mobileInPx */330,
  /* tabletInPx */768,
  /* desktopInPx */1024,
  /* retinaInPx */1440,
  /* screenSize */screenSize,
  /* mediaQuery */mediaQuery,
  /* mobile */mobile,
  /* tablet */tablet,
  /* desktop */desktop,
  /* retina */retina
];

exports.space = space;
exports.FontFamilies = FontFamilies;
exports.FontSizes = FontSizes;
exports.Colors = Colors;
exports.MediaQueries = MediaQueries;
/* body Not a pure module */
