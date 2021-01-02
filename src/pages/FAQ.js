import React, { Component } from 'react';
import Questions from '../components/Questions';
import Support from '../components/Support';
import Terms from '../components/TermsConditions';
import Container from '../components/layouts/Container';

const FAQ = () => {
  return (
    <Container>
      <Questions />
      <Terms />
      <Support />
    </Container>
  );
};

export default FAQ;
