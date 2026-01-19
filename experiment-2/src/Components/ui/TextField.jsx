import React from 'react';
import './TextField.css';

export default function TextField({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  error = false,
  errorMessage = '',
  disabled = false,
  required = false,
  id,
  className = '',
}) {
  return (
    <div className={`text-field-wrapper ${className}`}>
      {label && (
        <label htmlFor={id} className="text-field-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`text-field-input ${error ? 'error' : ''}`}
      />
      {error && errorMessage && (
        <span className="error-message">{errorMessage}</span>
      )}
    </div>
  );
}
