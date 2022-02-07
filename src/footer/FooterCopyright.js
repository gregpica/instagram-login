import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Footer.style';

function FooterCopyright({
  copy,
}) {
  return <p className={styles.copyright}>{copy}</p>;
}

FooterCopyright.propTypes = {
  copy: PropTypes.string.isRequired,
};


export default FooterCopyright;
