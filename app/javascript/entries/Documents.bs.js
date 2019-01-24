'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Lazy$Docify = require("../src/components/Lazy.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ApolloProvider = require("reason-apollo/src/ApolloProvider.bs.js");
var Suspense$Docify = require("../src/components/Suspense.bs.js");
var ApolloClient$Docify = require("../src/config/ApolloClient.bs.js");

var component = Lazy$Docify.make("../src/config/Routes");

var Routes = /* module */[/* component */component];

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, ApolloProvider.make(ApolloClient$Docify.instance, /* array */[ReasonReact.element(undefined, undefined, Suspense$Docify.make(/* array */[component]))])), "root");

exports.Routes = Routes;
/* component Not a pure module */
