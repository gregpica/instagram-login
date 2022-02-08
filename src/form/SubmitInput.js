import React from 'react';
import PropTypes from 'prop-types';

SubmitInput.propTypes = {
  value: PropTypes.string.isRequired,
};

function SubmitInput({
  value,
  className,
}) {
  return (
    <div className={className}>
      <input
        type="submit"
        value={value}
      />
    </div>
  );
}

export default SubmitInput;
