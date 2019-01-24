/* [@bs.module "react"] external _lazy = () => () = "lazy"
   [@bs.module "react"] external Suspense = () => () = "Suspense" */

module Spinner = {
  [@bs.module]
  external spinner: ReasonReact.reactClass = "../src/components/Spinner";

  [@bs.deriving abstract]
  type jsProps = {
    /* some example fields */
    className: string,
    /* `type` is reserved in Reason. use `type_` and make it still compile to the
       JS key `type` */
    [@bs.as "type"]
    type_: string,
    value: Js.nullable(int),
  };

  let make = (~className, ~type_, ~value=?, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=spinner,
      ~props=
        jsProps(~className, ~type_, ~value=Js.Nullable.fromOption(value)),
      children,
    );
};

/* import React, { lazy, Suspense } from 'react';
   import { render } from 'react-dom';
   import { ApolloProvider } from 'react-apollo';

   import Spinner from '../src/components/Spinner';
   import client from '../src/config/apolloClient'; */

/* let Routes = _lazy(() => import("../src/config/Routes"));

   let root = document.getElementById("root");

   render(
     <Suspense fallback={<Spinner isLoading />}>
       <ApolloProvider client={client}>
         <Routes />
       </ApolloProvider>
     </Suspense>,
     root
   ); */