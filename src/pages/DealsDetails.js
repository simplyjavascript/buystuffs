import React, { Component, useContext } from 'react';
import Container from '../components/layouts/Container';
import Loader from '../components/Loader';
import { useDispatch } from 'react-redux';

import { selectDealById, selectLoadingStatus } from '../store/deals';
import { useSelector } from 'react-redux';
import { addToCart } from '../store/cart';

const DealsDetails = (props) => {
  const id = props.match.params.id;
  const deal = useSelector(selectDealById(id));
  const loading = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  if (loading) {
    return <Loader />;
  }
  if (!deal) {
    return <h3> Sorry! Item not found</h3>;
  }
  const handleCart = () => {
    dispatch(addToCart(deal));
  };
  return (
    <Container>
      <section className="mw7 center">
        <h2 className="baskerville fw1 ph3 ph0-l">{deal.name}</h2>
        <article className="bt bb b--black-10">
          <div className="db pv4 ph3 ph0-l no-underline black">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={deal.imageUrl} className="db" alt={deal.name} />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">
                  {deal.description}
                </h1>
                <p className="f6 f5-l lh-copy">
                  Price: $ {deal.price} / Rating: {deal.rating}
                </p>
                <button
                  onClick={handleCart}
                  disabled={!deal.isAvailable}
                  className="f6 link dim br1 ph3 pv2 mb2 dib white bg-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default DealsDetails;
