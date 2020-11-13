/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';

export type LayoutProps = { children: ReactNode };

export const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before {
  box-sizing: inherit;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em georgia, serif, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  font-family: 'Roboto', georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
}

img {
  border-style: none;
  max-width: 100%;
  padding: 0;
  margin: 0 0 1.45rem;
}

hr {
  box-sizing: content-box;
  overflow: visible;
  padding: 0;
  margin: 0 0 calc(1.45rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
}
`;

const AppContent = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

const Layout = (props: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <AppContent>
        {children}

        <footer
          style={{
            marginTop: '2rem',
          }}
        >
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </AppContent>
    </>
  );
};

export default Layout;
