import styled from "styled-components";

export const Container = styled.div`
  button {
    display: grid;
    place-items: center;
    width: 40px;
    height: 72px;
    border: 0;
    padding: 0;
    font-family: inherit;
    background: transparent;
    color #585c62;
    cursor: pointer;
  }

  .burger {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 72px;
  }

  .navbar {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    padding: 20px 24px 0;
    translate: -100% 0;
    display: flex;
    gap: 10px
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition-property: translate, opacity, visibility;
    transition-duration: 0.5s;
  }

  .open .navbar {
    opacity: 1;
    visibility: visible;
    translate 0 0;
  }
`
