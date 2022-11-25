import React from 'react';
import PropTypes from 'prop-types';

// WIP
export const Input = ({ label, value, onChange }) => (
  <section className='relative h-6 w-full bg-slate-200'>
    {!value && (
      <label htmlFor='' className='absolute w-full'>
        {label}
      </label>
    )}
    <input className='absolute w-full bg-transparent' value={value} onChange={({ target }) => onChange(target.value)} />
  </section>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
