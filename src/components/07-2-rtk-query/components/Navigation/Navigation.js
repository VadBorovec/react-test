import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
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
        to="/todos"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Todos
      </StyledLink>

      <StyledLink
        to="/create"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Create Todo
      </StyledLink>
    </nav>
  );
};
