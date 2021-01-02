import React, { Component, useState } from 'react';

import Card from './Card';
import Rating from './Rating';
import SearchBar from './SearchBar';
import Loader from './Loader';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectLoadingStatus, selectFilteredDeals } from '../store/deals';

const Deals = (props) => {
  const filteredDeals = useSelector(selectFilteredDeals);
  const loading = useSelector(selectLoadingStatus);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <header className="tc ph4">
        <h1 className="ttu f3 black-90 mv3">Deal of the day</h1>
      </header>
      <div className="w-80 center">
        <SearchBar />
        <div>
          <section className="flex flex-wrap">
            {filteredDeals.map((product) => {
              const { id, rating } = product;
              return (
                <Card key={id} data={product}>
                  <Rating rating={rating} />
                </Card>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Deals;
