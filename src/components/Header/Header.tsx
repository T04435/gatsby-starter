import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export type HeaderProps = {
  siteTitle: string;
};

const HeaderContainer = styled.header`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContent = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Logo = styled((props) => <Link {...props} />)`
  color: white;
  text-decoration: none;
  & > h1 {
    margin: 0;
  }
`;

const Header = (props: HeaderProps) => {
  const { siteTitle } = props;
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <h1>{siteTitle}</h1>
        </Logo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
