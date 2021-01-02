import React from 'react';
import useToggle from '../hooks/useToggle';

const Support = (props) => {
  const { isOpen, toggle } = useToggle();
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1
        onClick={toggle}
        className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 pointer"
      >
        How can you reach us?
      </h1>
      {isOpen && (
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            You can reach us via email, Toll free and watsapp
          </p>
        </div>
      )}
    </article>
  );
};

export default Support;
