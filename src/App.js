import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CurrencyContext from './contexts/CurrencyContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NoFound from './pages/NotFound';
import DealsContext from './contexts/DealsContext';
import withDeals from './hoc/withDeals';
import { loadAllDeals } from './store/actions';
import { connect } from 'react-redux';

// import Cart from './pages/Cart';
// import ContactUs from './pages/ContactUs';
// import FAQ from './pages/FAQ';
// import DealsDetails from './pages/DealsDetails';
// import Booking from './pages/Booking';

const Cart = lazy(() => import('./pages/Cart'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const FAQ = lazy(() => import('./pages/FAQ'));
const DealsDetails = lazy(() => import('./pages/DealsDetails'));
const Booking = lazy(() => import('./pages/Booking'));

class App extends Component {
  state = {
    currency: 'CAD',
    toggleCurrency: () => {
      this.setState((prevState) => {
        return {
          currency: prevState.currency === 'CAD' ? 'INR' : 'CAD',
        };
      });
    },
  };
  componentDidMount() {
    this.props.loadAllDeals();
  }

  render() {
    return (
      <CurrencyContext.Provider value={this.state}>
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
      </CurrencyContext.Provider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllDeals: () => dispatch(loadAllDeals()),
  };
};

export default connect(null, mapDispatchToProps)(App);
