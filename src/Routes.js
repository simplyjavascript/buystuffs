import React, { Component, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NoFound from './pages/NotFound';
const Cart = lazy(() => import('./pages/Cart'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const FAQ = lazy(() => import('./pages/FAQ'));
const DealsDetails = lazy(() => import('./pages/DealsDetails'));
const Booking = lazy(() => import('./pages/Booking'));

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/cart"
          render={(props) => (
            <Suspense fallback={<h3> Loading ... </h3>}>
              <Cart {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/faq"
          render={(props) => (
            <Suspense fallback={<h3> Loading ... </h3>}>
              <FAQ {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <Suspense fallback={<h3> Loading ... </h3>}>
              <ContactUs {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/products/:id"
          render={(props) => (
            <Suspense fallback={<h3> Loading ... </h3>}>
              <DealsDetails {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/booking"
          render={(props) => (
            <Suspense fallback={<h3> Loading ... </h3>}>
              <Booking {...props} />
            </Suspense>
          )}
        />
        <Route component={NoFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
