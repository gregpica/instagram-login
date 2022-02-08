import React, { useState } from 'react';
import PropTypes from 'prop-types';


const PasswordInput = ({
  id,
  placeholder,
  onChange,
  value,
  className,
}) => {
  const [isHidingPassword, setIsHidingPassword] = useState(true);

  const togglePasswordHiding = () => setIsHidingPassword(!isHidingPassword);

  const inputType = isHidingPassword ? 'password' : 'text';
  const buttonCopy = isHidingPassword ? 'Show' : 'Hide';

  return (
    <div className={className}>
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div onClick={togglePasswordHiding}>{buttonCopy}</div>
    </div>
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PasswordInput;
