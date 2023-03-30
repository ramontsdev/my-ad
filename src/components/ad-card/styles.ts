import styled from "styled-components";

export const Wrapper = styled.article`
  width: 300px;
  min-width: 300px;
  height: 120px;
  min-height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: .3rem;

  border-radius: 0.8rem;

  cursor: pointer;
`
export const ImageWrapper = styled.div`
  width: 29%;
  height: 95%;

  position: absolute;
  left: 0;

  border-radius: 8px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.danger.light};
`
export const DescriptionWrapper = styled.div`
  width: 70%;
  height: 100%;

  position: absolute;
  right: 0px;

  border-radius: 8px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.tertiary.light};
`
export const BackgroundBase = styled.div`
  width: 80%;
  height: 100%;

  position: absolute;
  right: 0;

  border-radius: 0.8rem;

  background: ${({ theme }) => theme.colors.gray.light};
`
