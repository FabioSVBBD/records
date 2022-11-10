import React from 'react';
import PropTypes from 'proptypes';

// WIP
export const Input = ({ label }) => {
  return (
    <section>
      <label htmlFor=''>{label}</label>
      <input />
    </section>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};
