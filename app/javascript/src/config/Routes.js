import React, { lazy } from 'react';
import { Router } from '@reach/router';

const EditDocument = lazy(() => import('../pages/Documents/Edit'));
const AllDocuments = lazy(() => import('../pages/Documents/All.bs'));
const Test = lazy(() => import('../pages/Documents/Test.bs'));

export default function Routes() {
  return (
    <Router>
      <AllDocuments path="/documents" />
      <EditDocument path="documents/edit/:documentId" />
      <Test path="/documents/test" />
    </Router>
  );
}
