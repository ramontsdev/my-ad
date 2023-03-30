import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.gray.light};
`
export const NavBar = styled.nav`
  height: 80px;

  display: flex;
  justify-content: flex-end;

  padding: 12px 12px;

  background: ${({ theme }) => theme.colors.tertiary.light};

  .select {
    border-radius: 8px;

    & + .select{
      margin-left: 12px;
    }
  }
`
export const CarouselWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 30px 12px;

  overflow-x: auto;
  overflow-y: hidden;

  background: ${({ theme }) => theme.colors.primary.light};

  article {
    margin-left: 12px;
  }

  :first-child {
    background: black;
  }
`
export const MainContent = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;

  padding: 12px 12px 12px 0px;

  article {
    margin-left: 12px;
    margin-bottom: 12px;
  }

  overflow: auto;

  background: ${({ theme }) => theme.colors.danger.main};

  @media (max-width: 480px) {
    justify-content: center;
  }

  @media (max-width: 280px) {
    article {
      margin-left: 40px;
    }
  }
`
