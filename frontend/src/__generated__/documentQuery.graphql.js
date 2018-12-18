/**
 * @flow
 * @relayHash 01168388ef811f67e9098581bf4cfffe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type documentQueryVariables = {||};
export type documentQueryResponse = {|
  +viewer: ?{|
    +documents: ?$ReadOnlyArray<{|
      +title: string,
      +body: ?string,
    |}>
  |}
|};
export type documentQuery = {|
  variables: documentQueryVariables,
  response: documentQueryResponse,
|};
*/


/*
query documentQuery {
  viewer {
    documents {
      title
      body
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "documentQuery",
  "id": null,
  "text": "query documentQuery {\n  viewer {\n    documents {\n      title\n      body\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "documentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "LinkedField",
            "alias": null,
            "name": "documents",
            "storageKey": null,
            "args": null,
            "concreteType": "Document",
            "plural": true,
            "selections": [
              v0,
              v1
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "documentQuery",
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "LinkedField",
            "alias": null,
            "name": "documents",
            "storageKey": null,
            "args": null,
            "concreteType": "Document",
            "plural": true,
            "selections": [
              v0,
              v1,
              v2
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '682cdf3d9db1307a1f40e560769f9dda';
module.exports = node;
