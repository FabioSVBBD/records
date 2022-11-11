import React from 'react';
import PropTypes from 'proptypes';
import { useNoScroll } from '~/hooks';

export const Overlay = ({ visible, children }) => {
  useNoScroll(visible);

  if (!visible) {
    return null;
  }

  return (
    <article className='fixed top-0 left-0 w-full h-full bg-black/20'>
      {children}
    </article>
  );
};

Overlay.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
};
