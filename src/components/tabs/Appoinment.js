import React, { useState } from 'react';

const Appoinment = (props) => {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');

  const bookNow = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: '/booking',
      search: `?name=${name}&dateTime=${dateTime}`,
    });
  };
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
        Book an appoinment with us!
      </h1>
      <div className="pa3 bt b--black-10">
        <article className="pa4 black-80">
          <form onSubmit={bookNow}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Fill in your details</legend>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="date">
                  Date & time
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="text"
                  name="date"
                  id="date"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                />
              </div>
            </fieldset>
            <div className="mt3">
              <input
                className="b ph3 pv2 input-reset ba 
                  b--black bg-transparent grow pointer f6"
                type="submit"
                value="Book"
              />
            </div>
          </form>
        </article>
      </div>
    </article>
  );
};

export default Appoinment;
