import React from 'react';

import useToggle from '../hooks/useToggle';

const Terms = (props) => {
  const { isOpen, toggle } = useToggle();
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1
        onClick={toggle}
        className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 pointer"
      >
        Terms & Conditions
      </h1>
      {isOpen && (
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            I hereby agree to the terms & conditions mentioned in the document.
          </p>
        </div>
      )}
    </article>
  );
};

export default Terms;
