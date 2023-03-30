import { Form, LoginBox, SubmitButton, UserBox } from "./styles"

const SignInPage = () => {
  return (
    <LoginBox className="login-box">
      <h2>Login</h2>

      <Form>
        <UserBox className="user-box">
          <input type="email" name="" required />
          <label htmlFor="">E-mail</label>
        </UserBox>

        <UserBox className="user-box">
          <input type="password" name="" required />
          <label htmlFor="">Senha</label>
        </UserBox>

        <SubmitButton>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Entrar
        </SubmitButton>
      </Form>
    </LoginBox>
  )
}

export default SignInPage
