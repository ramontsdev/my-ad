import styled from "styled-components";

export const Wrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.gray.main};

  cursor: pointer;
`
