import React from 'react';
import './Select.css';

export default function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  required = false,
  id,
  className = '',
}) {
  return (
    <div className={`select-wrapper ${className}`}>
      {label && (
        <label htmlFor={id} className="select-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="select-input"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
