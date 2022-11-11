import React from 'react';
import PropTypes from 'proptypes';
import { Overlay } from './overlay';

export const Modal = ({ visible, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <Overlay visible>
      <section className='bg-slate-300 p-4 min-w-[min(24rem,_90%)] min-h-[5rem] sm:rounded-2xl rounded-lg max-w-[90vw] max-h-[90vh] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
        {children}
      </section>
    </Overlay>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
};
