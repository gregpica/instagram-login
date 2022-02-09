import { css } from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  color: #8e8e8e;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  margin: 0 30px;
`;

export const link = css`
  a {
    color: #8e8e8e;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-decoration: none;
  }

  padding-top: 10px;
  padding-right: 15px;

`;

export const copyright = css`
  color: #8e8e8e;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const linksContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const selectorAndCopyrightContainer = css`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

export const languageSelector = css`
  border: none;
  color: #8e8e8e;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-right: 20px;
  background-color: #fafafa;
`;



