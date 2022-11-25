import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Overlay } from './overlay';

export const Modal = ({ visible, children, className }) => {
  if (!visible) {
    return null;
  }

  const containerClass = classNames(
    className,
    'bg-slate-300 p-4 min-w-[min(24rem,_90%)] min-h-[5rem] sm:rounded-2xl rounded-lg max-w-[90vw] max-h-[90vh] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'
  );

  return (
    <Overlay visible>
      <section className={containerClass}>{children}</section>
      <Overlay />
    </Overlay>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};
