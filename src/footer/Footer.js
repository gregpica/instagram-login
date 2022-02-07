import React from 'react';

import FooterLinks from './FooterLinks'
import FooterCopyright from './FooterCopyright';
import FooterLanguageSelector from './FooterLanguageSelector';
import { FOOTER_LINKS_TOP, FOOTER_LINKS_BOTTOM, FOOTER_COPYRIGHT, FOOTER_LANGUAGE_OPTIONS } from './constants';

import * as styles from './Footer.style';

function Footer() {
  return (
    <div className={styles.container}>
      <FooterLinks links={FOOTER_LINKS_TOP} />
      <FooterLinks links={FOOTER_LINKS_BOTTOM} />
      <div className={styles.selectorAndCopyrightContainer}>
        <FooterLanguageSelector languageOptions={FOOTER_LANGUAGE_OPTIONS} />
        <FooterCopyright copy={FOOTER_COPYRIGHT} />
      </div>
    </div>
  );
}

export default Footer;
