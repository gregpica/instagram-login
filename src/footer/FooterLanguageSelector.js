import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Footer.style';

function FooterLanguageSelector({
  languageOptions
}) {
  return (
    <select className={styles.languageSelector} name="footerLanguageSelector" id="footerLanguageSelector">
      {languageOptions.map(({ copy, id }) => <option key={id} value={id}>{copy}</option>)}
    </select>
  )
};

FooterLanguageSelector.propTypes = {
  languageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      copy: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default FooterLanguageSelector;
