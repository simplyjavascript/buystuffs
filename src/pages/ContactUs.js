import React, { Component } from 'react';
import Container from '../components/layouts/Container';
import Email from '../components/tabs/Email';
import Mobile from '../components/tabs/Mobile';
import Office from '../components/tabs/Office';
import Appoinment from '../components/tabs/Appoinment';
import { NavLink, Route } from 'react-router-dom';

const ContactUs = (props) => {
  const { match } = props;
  return (
    <Container>
      <div className="tc">
        <NavLink
          to={`${match.url}/mobile`}
          activeClassName="ba white bg-black"
          className="f6 link ba ph3 pv2 mb2 dib black pointer mr2"
        >
          Mobile
        </NavLink>
        <NavLink
          to={`${match.url}/email`}
          activeClassName="ba white bg-black"
          className="f6 link ba ph3 pv2 mb2 dib black pointer mr2"
        >
          Email
        </NavLink>
        <NavLink
          to={`${match.url}/office`}
          activeClassName="ba white bg-black"
          className="f6 link ba ph3 pv2 mb2 dib black pointer mr2"
        >
          Our offices
        </NavLink>
        <NavLink
          to={`${match.url}/appoinment`}
          activeClassName="ba white bg-black"
          className="f6 link ba ph3 pv2 mb2 dib black pointer"
        >
          Book now
        </NavLink>
      </div>
      <Route
        exact
        path={match.url}
        render={() => {
          return (
            <div className="tc">
              <h1 className="f6 lh-copy">Select your choice</h1>
            </div>
          );
        }}
      />
      <Route path="/contact/mobile" component={Mobile} />
      <Route path="/contact/email" component={Email} />
      <Route path="/contact/office" component={Office} />
      <Route path="/contact/appoinment" component={Appoinment} />
    </Container>
  );
};

export default ContactUs;
