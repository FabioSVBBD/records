import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '~/components';
import { Home } from '~/pages';

export const Router = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />

        <Route path='*' element={<Navigate to='' replace />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);
