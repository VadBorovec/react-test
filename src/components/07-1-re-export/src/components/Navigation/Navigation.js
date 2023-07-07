import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <StyledLink
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
        end
      >
        Home
      </StyledLink>

      <StyledLink
        to="/authors"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Authors
      </StyledLink>

      <StyledLink
        to="/books"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Books
      </StyledLink>
    </nav>
  );
};
