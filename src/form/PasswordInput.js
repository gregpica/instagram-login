import React from 'react';
import PropTypes from 'prop-types';

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};

function PasswordInput({
  id,
  placeholder,
  onChange,
  value,
  label,
  className,
}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id}>
          <p>{label}</p>
        </label>
      )}
      <input
        id={id}
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default PasswordInput;
