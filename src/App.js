import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter , Routes, Route,Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, Product, Products,PostJob, AboutPage,CertificateView, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

const App = () => {
    return (
  <HashRouter >
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        {/* <Route path="/product/:id" element={<Product />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Navigate to="/aws-verifyId-w3schools/A0N31P7CENF11H9G" />} />
        <Route path="/aws-verifyId-w3schools/:id" element={<CertificateView />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} /> 
      </Routes>
    </Provider>
  </HashRouter >
  );
};
export default App;