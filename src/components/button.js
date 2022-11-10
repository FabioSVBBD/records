import React from 'react';
import classnames from 'classnames';
import PropTypes from 'proptypes';

export const Button = ({ primary, secondary, onClick, children }) => {
  const className = classnames(
    'px-8 py-1 rounded-md shadow-md text-2xl font-semibold transition-all flex-grow',
    {
      'bg-white/40 hover:bg-white/60 text-black/90': primary && !secondary,
      'border-white/40 border-2 text-white/70 hover:bg-white/30':
        secondary && !primary,
    }
  );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.boolean,
  secondary: PropTypes.boolean,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
