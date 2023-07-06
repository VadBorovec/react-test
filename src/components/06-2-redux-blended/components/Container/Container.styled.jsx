import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(300)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  /* max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px; */

  margin-left: auto;
  margin-right: auto;
`;
