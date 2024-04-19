// components/Checkbox.js
import React from 'react';

const Checkbox = ({id, label, checked, onChange }) => {
  return (
    <label htmlFor={id} className="inline-flex items-center cursor-pointer">
       <span className="">{label}</span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="ml-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </label>
  );
};

export default Checkbox;

