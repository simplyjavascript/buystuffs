import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrencyContext from '../contexts/CurrencyContext';
import { formatMoney } from '../utils/format-money';

const Card = ({ data, children }) => {
  const { name, imageUrl, price, id } = data;
  const { currency } = useContext(CurrencyContext);
  return (
    <article className="bg-white mh3 ba b--black-10 mv4">
      <div className="pv2 ph3">
        <h1 className="f6 ttu tracked"> {name} </h1>
      </div>
      <img src={imageUrl} className="w-100 db" alt={name} />
      <div className="pa3">
        <Link to={`/products/${id}`} className="link dim lh-title">
          Details
        </Link>
        {children}
        <small className="gray db pv2">{formatMoney(currency, price)}</small>
      </div>
    </article>
  );
};

export default React.memo(Card);
