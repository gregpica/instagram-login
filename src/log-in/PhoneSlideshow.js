import React from 'react';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slideImage1 from '../assets/phone-slide-1.jpeg';
import slideImage2 from '../assets/phone-slide-2.jpeg';
import slideImage3 from '../assets/phone-slide-3.jpeg';
import slideImage4 from '../assets/phone-slide-4.jpeg';
import slideImage5 from '../assets/phone-slide-5.jpeg';

import * as styles from './LogIn.style';

const SLIDE_IMAGES = [
  slideImage1,
  slideImage2,
  slideImage3,
  slideImage4,
  slideImage5
];

function PhoneSlideshow() {
  return (
    <div className={styles.slideshow}>
      <Fade 
        autoplay={true}
        arrows={false}
        pauseOnHover={false}
      >
        {
          SLIDE_IMAGES.map(url => {
            return (
              <div>
                <img src={url} alt='' />
              </div>
            )
          })
        }
      </Fade>
    </div>
  );
}

export default PhoneSlideshow;
