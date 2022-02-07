import { css } from '@emotion/css';

const BREAK_POINT_MD = '768px';
const BREAK_POINT_LG = '992px';
const BREAK_POINT_XL = '1200px';
const BREAK_POINT_XXL = '1440px';

export const XXLDesktopAndUp = XXLDesktopAndUpStyles => {
  return css`
    @media (min-width: ${BREAK_POINT_XXL}) {
      ${XXLDesktopAndUpStyles};
    }
  `;
};

export const XLDesktopAndUp = XLDesktopAndUpStyles => {
  return css`
    @media (min-width: ${BREAK_POINT_XL}) {
      ${XLDesktopAndUpStyles};
    }
  `;
};

export const desktopAndUp = desktopAndUpStyles => {
  return css`
    @media (min-width: ${BREAK_POINT_LG}) {
      ${desktopAndUpStyles};
    }
  `;
};

export const tabletAndUp = tabletAndUpStyles => {
  return css`
    @media (min-width: ${BREAK_POINT_MD}) {
      ${tabletAndUpStyles};
    }
  `;
};

export const showMobileOnly = mobileOnlyStyles => {
  return css`
    ${mobileOnlyStyles};

    @media (min-width: ${BREAK_POINT_MD}) {
      display: none;
    }
  `;
};

export const showTabletAndUpOnly = tabletAndUpOnlyStyles => {
  return css`
    display: none;

    @media (min-width: ${BREAK_POINT_MD}) {
      display: block;

      ${tabletAndUpOnlyStyles};
    }
  `;
};

