import React from 'react';
import './Checkbox.css';

export default function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  className = '',
  name = '',
}) {
  return (
    <div className={`checkbox-wrapper ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox-input"
        name={name}
      />
      {label && (
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      )}
    </div>
  );
}
