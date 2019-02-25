import React, { lazy } from 'react';
import { Router } from '@reach/router';

const EditDocument = lazy(() => import('../pages/EditDocument'));
const AllDocuments = lazy(() => import('../pages/AllDocuments'));

export default function Routes() {
  return (
    <Router>
      <AllDocuments path="/documents" />
      <EditDocument path="documents/edit/:documentId" />
    </Router>
  );
}
