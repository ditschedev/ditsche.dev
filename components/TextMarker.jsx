import React from 'react';

const TextMarker = ({children, size}) => {
  return (
    <span className={`${size === 'sm' ? 'highlight-sm' : 'highlight'} transition-all`}>
      {children}
    </span>
  );
};

export default TextMarker;