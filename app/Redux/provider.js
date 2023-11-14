"use client";

import React from "react";

import { Provider } from "react-redux";
import { persistor, store } from "@/app/Redux/store";

import { PersistGate } from "redux-persist/integration/react";

const DProvider = ({ children }) => {
  // const { store, props } = wrapper.useWrappedStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
  // return children;
};

export default DProvider;
