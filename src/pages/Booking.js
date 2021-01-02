import React, { Component, useState } from 'react';
import Container from '../components/layouts/Container';
import queryString from 'query-string';

const Booking = (props) => {
  const { name, dateTime } = queryString.parse(props.location.search);
  return (
    <Container>
      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
          Your booking details
        </h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            Thank you <strong> {name}</strong> !
          </p>
          <p className="f6 f5-ns lh-copy measure">
            Your appoinment has been booked on <strong> {dateTime} </strong> See
            ya 👋 !
          </p>
        </div>
      </article>
    </Container>
  );
};

export default Booking;
