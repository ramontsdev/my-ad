import styled, { keyframes } from "styled-components";

const btnAnim1 = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`
const btnAnim2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`
const btnAnim3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`
const btnAnim4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`
export const LoginBox = styled.div`
  width: 95%;
  max-width: 550px;

  position: absolute;
  top: 50%;
  left: 50%;

  padding: 40px;

  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.primary.main};
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;

  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: ${({ theme }) => theme.colors.tertiary.main};
    text-align: center;
  }
`
export const Form = styled.div`
  button {
    display: inline-block;

    position: relative;

    margin-top: 40px;
    padding: 10px 20px;

    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    letter-spacing: 4px;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.secondary.main};

    background: transparent;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  button:hover {
    background: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.clean.white};
    border-radius: 5px;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary.main},
                0 0 25px ${({ theme }) => theme.colors.secondary.main},
                0 0 50px ${({ theme }) => theme.colors.secondary.main},
                0 0 100px ${({ theme }) => theme.colors.secondary.main};
  }
`
export const UserBox = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.clean.white};
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.clean.white};
    outline: none;
    background: transparent;
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.clean.white};
    pointer-events: none;
    transition: .5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    left: 0;
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 12px;
  }
`
export const SubmitButton = styled.button`
  span {
    position: absolute;
    display: block;
  }
  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.secondary.main});
    animation: ${btnAnim1} 1s linear infinite;
  }
  span:nth-child(2) {
    top: -100%;
    right: 0px;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${({ theme }) => theme.colors.secondary.main});
    animation: ${btnAnim2} 1s linear infinite;
    animation-delay: .25s;
  }
  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, ${({ theme }) => theme.colors.secondary.main});
    animation: ${btnAnim3} 1s linear infinite;
    animation-delay: .5s;
  }
  span:nth-child(4) {
    bottom: -100;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, ${({ theme }) => theme.colors.secondary.main});
    animation: ${btnAnim4} 1s linear infinite;
    animation-delay: .75s;
  }
`
