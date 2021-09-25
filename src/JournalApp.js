import React from "react";
import { Provider } from "react-redux";

import AppRourter from "./router/AppRourter";
import "./styles/index.scss";

export default function JournalApp() {
  return (
    <div>
      <Provider>
        <AppRourter />
      </Provider>
    </div>
  );
}
