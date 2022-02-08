import { css } from '@emotion/css';

export const container = css`
  width: 350px;
  height: 382px;
  border: 1px solid #dbdbdb;
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
    }
  }
`;