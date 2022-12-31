import React from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';

const footerStyle = css`
  padding: 40px 16px;

  & > nav {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const iconStyle = (color) => css`
  width: 2rem;
  height: 2rem;
  stroke: ${color};
`;

const Footer = () => {
  const { isLight } = useThemeContext();

  return (
    <footer css={[footerStyle]}>
      <nav>
        <div>{new Date().getFullYear()} &copy; Adri</div>
      </nav>
    </footer>
  );
};

export default Footer;
