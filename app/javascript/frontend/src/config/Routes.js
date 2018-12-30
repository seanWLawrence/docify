import React, { lazy } from 'react';
import { Router } from '@reach/router';

const EditDocument = lazy(() => import('../pages/Documents/Edit'));
const AllDocuments = lazy(() => import('../pages/Documents/All'));

export default function Routes() {
  return (
    <Router>
      <AllDocuments path="/documents" />
      <EditDocument path="documents/edit/:documentId" />
    </Router>
  );
}
