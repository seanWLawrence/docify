/**
 * @flow
 * @relayHash b602120b2c4a4f9181c04069860c7433
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type viewerQueryVariables = {||};
export type viewerQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +email: string,
  |}
|};
export type viewerQuery = {|
  variables: viewerQueryVariables,
  response: viewerQueryResponse,
|};
*/


/*
query viewerQuery {
  viewer {
    id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "viewerQuery",
  "id": null,
  "text": "query viewerQuery {\n  viewer {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "viewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "viewerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9c43796f16a821ef6ba6e8b7718d759';
module.exports = node;
