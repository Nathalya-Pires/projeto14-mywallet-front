import styled from "styled-components";
import { useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <Login>
        <label>
          <input
            type="email"
            name="email"
            onChange={handleForm}
            value={form.email}
            minLength={5}
            required
            placeholder="E-mail"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            onChange={handleForm}
            value={form.password}
            minLength={5}
            required
            placeholder="Senha"
          />
        </label>
        <Entrar>Entrar</Entrar>
      </Login>
      <p>
        Primeira vez? Cadastre-se!
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #8c11be;
  width: 375px;
  height: 100%;
  min-height: 667px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    padding-top: 159px;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17.6px;
    text-align: center;
    text-decoration-line: none;
    color: #ffffff;
  }
`;
const Login = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 1%;
    ::placeholder {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
      padding-left: 12px;
    }
  }
`;
const Entrar = styled.button`
  width: 303px;
  height: 45px;
  margin: 3px 0 25px 0;
  background: #a328d6;
  border: none;
  border-radius: 4.64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  a {
    color: inherit;
  }
`;
