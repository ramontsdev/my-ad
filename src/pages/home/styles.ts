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

  padding: 12px 0px 17px 0px;

  overflow-x: hidden;
  overflow-y: hidden;

  background: ${({ theme }) => theme.colors.danger.dark};
`
export const SplideSlide = styled(BaseSplideSlide)`
  display: flex;
  justify-content: center;

  padding: 20px 0px;
  padding: 20px 0px 12px 0px;
  margin: 0px 0px 8px 0px;
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
