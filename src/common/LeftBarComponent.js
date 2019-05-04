import React, { useState, useEffect } from 'react';

const LeftBarComponent = React.forwardRef((props, ref) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    console.log('function component update');

    return () => {
      console.log('unMount');
    };
  }, []);
  return (
    <div
      {...props}
      ref={ref}
      suppressContentEditableWarning
      contentEditable="true"
      className={`element-left-bar ${hidden ? 'hidden' : ''}`}
    >
      Left bar
      <button
        type="button"
        className="element-left-bar-btn"
        onClick={() =>
          setHidden(prevState => {
            console.log(prevState);
            return !prevState;
          })
        }
      >
        hide
      </button>
    </div>
  );
});

export default LeftBarComponent;
