import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import { RouterProvider } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru.json";
import reportWebVitals from "reportWebVitals";

import { store } from "store";
import router from "router";
import "css/index.css";
import { fetchList as subredditsFetchList } from "features/subreddits/subredditsSlice";
import { fetchList as postFetchList } from "features/post/postSlice";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
store.dispatch(subredditsFetchList());
store.dispatch(postFetchList("r/pics/.json"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
