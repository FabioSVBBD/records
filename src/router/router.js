import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'src/pages';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Home />} />

      <Route path='*' element={<Navigate to='' replace />} />
    </Routes>
  </BrowserRouter>
);
