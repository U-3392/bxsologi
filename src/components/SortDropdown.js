import React from 'react';

function SortDropdown({ keys, onSortKeyChange }) {
  const handleChange = (event) => {
    onSortKeyChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {keys.map((key, index) => (
        <option key={index} value={key}>{key}</option>
      ))}
    </select>
  );
}

export default SortDropdown;
