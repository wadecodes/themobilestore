import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  const Star = (full, half) => (
    <i
      style={{ color }}
      className={
        value >= full
          ? 'fas fa-star'
          : value >= half
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
    />
  );

  return (
    <div className="rating">
      <span>{Star(1, 0.5)}</span>
      <span>{Star(2, 1.5)}</span>
      <span>{Star(3, 2.5)}</span>
      <span>{Star(4, 3.5)}</span>
      <span>{Star(5, 4.5)}</span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
