import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Footer.style';

function FooterLink({
  copy,
  url
}) {
  return (
    <div className={styles.link} >
      <a href={url}>{copy}</a>
    </div>
  )
}

FooterLink.propTypes = {
  copy: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default FooterLink;



