/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '../Header/Header';

import './layout.css';

type BaseProps = { children: ReactNode };

const Layout = (props: BaseProps) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: '2rem',
          }}
        >
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
