import styled from "styled-components";
import { Swiper as BaseSwiper, SwiperSlide as BaseSwiperSlide } from 'swiper/react';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.gray.light};

  @media (max-width: 480px){
    flex-direction: column;
  }
`
export const PhotosWrapper = styled.div`
  width: 350px;
  height: 550px;

  border-color: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-style: solid;
  border-width: 0px 1px;

  @media (max-width: 480px){
    width: 90%; /* image.width * (options.height / image.height) */
    width: ${1287 * (500 / 1931)}px;
    height: 500px;

    margin: auto;
  }
`
export const Swiper = styled(BaseSwiper)`
  --swiper-pagination-color: #0FDD00;
  --swiper-navigation-color: #FF0;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
`
export const SwiperSlide = styled(BaseSwiperSlide)`
  display: grid;
  place-items: center;
`
export const DescriptionWrapper = styled.div`
  width: 350px;

  border-color: ${({ theme }) => theme.colors.primary.dark};
  border-style: solid;
  border-width: 0px 1px;

  padding: 12px;

  @media (max-width: 480px){
    width: 95%;
    flex: 1;

    display: grid;

    overflow: auto;

    margin: auto;
    margin-bottom: 20px;
  }
`
