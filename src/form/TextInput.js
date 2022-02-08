import React from 'react';
import PropTypes from 'prop-types';

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};

function TextInput({
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
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
