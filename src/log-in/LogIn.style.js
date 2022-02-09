import { css } from '@emotion/css';
import { tabletAndUp, desktopAndUp } from '../styles/mediaQueries';

/**
 * This style file is quite big.
 * Typically I would have a file per component or use styled-components
 */

export const container = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;

  ${tabletAndUp(css`
    margin-top: 45px;
  `)};
`;

export const formContainer = css`
  width: 350px;
  height: 382px;
  margin: 0 auto;

  ${tabletAndUp(css`
    border: 1px solid #dbdbdb;
    background-color: white;
  `)};
`;

export const form = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  textarea:focus, input:focus{
    outline: none;
  }
`;

export const formTextInput = css`
  margin-bottom: 7px;

  input {
    width: 252px;
    height: 18px;
    background: #fafafa;
    border: 1px solid #aaa4a3;
    padding: 9px 7px 8px;
    text-overflow: ellipses;
    border-radius: 3px;
  }
`;

export const formPasswordInput = css`
  margin-bottom: 7px;
  display: flex;
  align-items: center;

  input {
    width: 200px;
    height: 18px;
    background: #fafafa;
    border: 1px solid #aaa4a3;
    border-right: 0;
    padding: 9px 7px 8px;
    text-overflow: ellipses;
    border-radius: 3px 0 0 3px;
  }

  div {
    width: 52px;
    height: 18px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 0 3px 3px 0;
    border: 1px solid #aaa4a3;
    border-left: 0;
    padding-top: 9px;
    padding-bottom: 8px;
    background: #fafafa;
  }
`;

export const formSubmitInput = css`
  margin-top: 16px;

  input {
    width: 268px;
    height: 30px;
    border-radius: 3px;
    border: 0;
    background: #b3dffc;
    color: white;
    font-weight: bold;
  }

  &.-submit-allowed {
    input {
      background: #0095F6;
      cursor: pointer;
    }
  }
`;

export const instagramLogo = css`
  margin-top: 10px;

  img {
    width: 175px;
  }
`;

export const facebookLogo = css`
  img {
    width: 15px;
    padding-top: 1px;
  }
`

export const divider = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8e8e8e;
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const dividerLine = css`
  height: 1px;
  width: 112px;
  background: #8e8e8e;
  margin: 0 10px;
`;

export const facebookLogin = css`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 268px;
  cursor: pointer;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #375185;
  text-decoration: none;
  margin-bottom: 15px;

  span {
    margin-left: 8px;
  }

  ${tabletAndUp(css`
    background-color: white;
` )};
`;

export const forgotPasswordCta = css`
  color: #375185;
  text-decoration: none;
  font-size: 12px;
`;

export const signUpBlock = css`
  width: 350px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin: 0 auto;

  a {
    color: #0095f6;
    font-weight: bold;
    text-decoration: none;
  }

  ${tabletAndUp(css`
    border: 1px solid #dbdbdb;
    margin-top: 10px;
    background-color: white;
  `)};
`;

export const appDownloadCTAContainer = css`
  div {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 14px;
    margin: 20px 0;
  }
`;

export const appDownloadImage = css`
  margin: 0 4px;
  cursor: pointer;

  img {
    height: 40px;
  }
`;

export const slideshow = css`
  width: 240px;
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 151px;
`;

export const  phoneAndSlideshowContainer = css`
  display: none;

  ${desktopAndUp(css`
    display: block;
    position: relative;
    width: 454px;
    height: 618px;
  `)};
`;

export const phone = css`
  position: absolute;
  top: 0;
  left: 0;
`;