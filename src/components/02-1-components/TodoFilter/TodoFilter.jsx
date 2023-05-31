import React from 'react';
import './TodoFilter.scss';

const Filter = ({ value, onChange }) => (
  <div className="Todofilter">
    <label className="Todofilter__label">
      Filter
      <input
        className="Todofilter__textarea"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;
