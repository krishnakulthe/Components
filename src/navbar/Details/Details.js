import React from 'react';

const Details = ({ tabName }) => {
  return (
    <div className="tab-content">
      <h2>{tabName}</h2>
      <p>Details content goes here...</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
    </div>
  );
};

export default Details;
