import { configureStore } from '@reduxjs/toolkit';
import navReducer from './features/Nav/NavSlice';
import React from 'react';

export const store = configureStore({
  reducer: {
    nav: navReducer
  }
});