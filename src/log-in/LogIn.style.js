import { css } from '@emotion/css';

export const container = css`
  width: 350px;
  height: 382px;
  border: 1px solid #dbdbdb;
`;

export const formInput = css`
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
    }
  }
`;