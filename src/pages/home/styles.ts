import { SplideSlide as BaseSplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.gray.light};
`
export const NavBar = styled.nav`
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 12px;

  background: ${({ theme }) => theme.colors.tertiary.light};

  .select {
    width: 5.7rem;
    height: 2.5rem;
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

  padding: 12px 0px 0px 0px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.danger.dark};
`
export const SplideSlide = styled(BaseSplideSlide)`
  display: flex;
  justify-content: center;

  padding: 0px 0px 12px 0px;
`
export const MainContent = styled.main`
  flex: 1;
  background: ${({ theme }) => theme.colors.danger.main};

  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  padding: 12px 12px 0px 0px;

  article {
    margin-left: 12px;
    margin-bottom: 12px;
  }

  overflow: auto;

  background: ${({ theme }) => theme.colors.danger.main};

  @media (max-width: 480px) {
    justify-content: center;

    article {
      margin-left: 12px;
    }
  }

  @media (max-width: 280px) {
    article {
      margin-left: 40px;
    }
  }
`
export const Footer = styled.footer`
  width: 100%;
  height: 65px;

  background: ${({ theme }) => theme.colors.secondary.light};
`
