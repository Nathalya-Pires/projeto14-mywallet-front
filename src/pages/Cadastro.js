import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import context from "../context/Context";

export default function Cadastro() {
  const navigate = useNavigate();
  const { config } = useContext(context);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form)
  }

  function enviaCadastro(e) {
    e.preventDefault();

    const requisicao = axios.post(
      `${process.env.REACT_APP_API_URL}/cadastro`,
      form
    );
    requisicao.then((res) => navigate("/"));
    requisicao.catch((err) => alert(err.response.data.message));
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <Dados onSubmit={enviaCadastro}>
        <input
          type="text"
          name="name"
          onChange={handleForm}
          value={form.name}
          minLength={3}
          required
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          onChange={handleForm}
          value={form.email}
          minLength={5}
          required
          placeholder="E-mail"
        />
        <input
          type="password"
          name="password"
          onChange={handleForm}
          value={form.password}
          minLength={5}
          required
          placeholder="Senha"
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleForm}
          value={form.confirmPassword}
          minLength={5}
          required
          placeholder="Confirme a senha"
        />
        <Cadastrar>Cadastrar</Cadastrar>
      </Dados>
      <p><Link to={"/"}>Já tem uma conta? Entre agora!</Link></p>
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
