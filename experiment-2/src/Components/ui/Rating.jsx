import React, { useState } from 'react';
import './Rating.css';

export default function Rating({
  value = 0,
  onChange,
  maxStars = 5,
  size = 'medium',
  readonly = false,
  label = '',
}) {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (rating) => {
    if (!readonly && onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating) => {
    if (!readonly) {
      setHoverValue(rating);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div className="rating-wrapper">
      {label && <label className="rating-label">{label}</label>}
      <div className={`rating-container rating-${size}`}>
        {Array.from({ length: maxStars }, (_, i) => i + 1).map((star) => (
          <span
            key={star}
            className={`star ${
              star <= (hoverValue || value) ? 'filled' : 'empty'
            } ${readonly ? 'readonly' : ''}`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            role={readonly ? 'img' : 'button'}
            tabIndex={readonly ? -1 : 0}
            aria-label={`Rate ${star} out of ${maxStars}`}
          >
            ★
          </span>
        ))}
      </div>
      {value > 0 && <span className="rating-value">{value.toFixed(1)}</span>}
    </div>
  );
}
