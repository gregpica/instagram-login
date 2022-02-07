import React from 'react';
import PropTypes from 'prop-types';

import FooterLink from './FooterLink';

import * as styles from './Footer.style';

function FooterLinks({ links }) {
  return (
    <div className={styles.linksContainer}>
      {links.map(({ copy, url }, i) => (
        <FooterLink key={i.toString()} copy={copy} url={url} />
      ))}
    </div>
  );
}

FooterLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      copy: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default FooterLinks;
