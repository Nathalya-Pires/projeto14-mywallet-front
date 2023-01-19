import styled from "styled-components";
import { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <Dados>
        <input
          data-test="user-name-input"
          type="text"
          name="name"
          onChange={handleForm}
          value={form.name}
          minLength={5}
          required
          placeholder="Nome"
        />
        <input
          data-test="email-input"
          type="email"
          name="email"
          onChange={handleForm}
          value={form.email}
          minLength={5}
          required
          placeholder="E-mail"
        />
        <input
          data-test="password-input"
          type="password"
          name="password"
          onChange={handleForm}
          value={form.password}
          minLength={5}
          required
          placeholder="Senha"
        />
        <input
          data-test="password-input"
          type="password"
          name="password"
          onChange={handleForm}
          value={form.password}
          minLength={5}
          required
          placeholder="Confirme a senha"
        />
        <Cadastrar>Cadastrar</Cadastrar>
      </Dados>
      <p>Já tem uma conta? Entre agora!</p>
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
    padding-top: 100px;
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

const Dados = styled.form`
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

const Cadastrar = styled.button`
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
`;
