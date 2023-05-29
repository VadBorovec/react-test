// import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      уменьшить на 1
    </button>
  </div>
);

export default Controls;

// const Controls = ({ onIncrement, onDecrement }) => (
//   <div className="Counter__controls">
//     <button type="button" onClick={onIncrement}>
//       Увеличить на 1
//     </button>
//     <button type="button" onClick={onDecrement}>
//       Уменьшить на 1
//     </button>
//   </div>
// );

// export default Controls;
