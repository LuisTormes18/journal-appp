import React from "react";
import { Provider } from "react-redux";

import AppRourter from "./router/AppRourter";
import { store } from "./store/store";
import "./styles/index.scss";

export default function JournalApp() {
  return (
    <div>
      <Provider store={store}>
        <AppRourter />
      </Provider>
    </div>
  );
}
