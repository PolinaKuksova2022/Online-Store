import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import "./index.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Header, Footer, ModalPurchase, ModalInform } from "components";
import { PageCatalog, PageProduct, Page404, PageCart } from "pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PageCatalog />} />
          <Route path="/product/:id" element={<PageProduct />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/cart" element={<PageCart />} />
        </Routes>
        <Footer />
        <ModalPurchase />
        <ModalInform />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
