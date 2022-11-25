import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const Button = ({ primary, secondary, onClick, children }) => {
  const className = classnames('grow rounded-md px-8 py-1 text-2xl font-semibold shadow-md transition-all', {
    'bg-white/40 text-black/90 hover:bg-white/60': primary && !secondary,
    'border-2 border-white/40 text-white/70 hover:bg-white/30': secondary && !primary,
  });

  return (
    <button type='button' className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
