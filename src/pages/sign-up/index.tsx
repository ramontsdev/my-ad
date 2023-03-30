import { Form, LoginBox, SubmitButton, UserBox } from "./styles"

const SignUpPage = () => {
  return (
    <LoginBox className="login-box">
      <h2>Criar conta</h2>

      <Form>
        <UserBox className="user-box">
          <input type="text" name="" required />
          <label htmlFor="">Seu nome</label>
        </UserBox>

        <UserBox className="user-box">
          <input type="email" name="" required />
          <label htmlFor="">E-mail</label>
        </UserBox>

        <UserBox className="user-box">
          <input type="password" name="" required />
          <label htmlFor="">Senha</label>
        </UserBox>

        <UserBox className="user-box">
          <input type="password" name="" required />
          <label htmlFor="">Confirme a senha</label>
        </UserBox>

        <SubmitButton type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Cadastrar
        </SubmitButton>
      </Form>
    </LoginBox>
  )
}

export default SignUpPage
