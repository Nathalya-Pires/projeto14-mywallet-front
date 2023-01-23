import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import context from "../context/Context";
import { Link } from "react-router-dom";

export default function NovaSaida() {
  const { config, setConfig } = useContext(context);
  const [form, setForm] = useState({
    value: "",
    description: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
    console.log(config);
  }

  function addExit(e) {
    e.preventDefault();

    const req = axios.post(
      `${process.env.REACT_APP_API_URL}/nova-saida`,
      form,
      config
    );
    req.then((res) => console.log(res.data));
    req.catch((err) => alert(err));
  }

  return (
    <Container>
      <Topo>
        <p>Nova Saída</p>
      </Topo>
      <Valor onSubmit={addExit}>
        <label>
          <input
            type="number"
            name="value"
            onChange={handleForm}
            value={form.value}
            minLength={1}
            required
            placeholder="Valor"
          />
        </label>
        <label>
          <input
            type="text"
            name="description"
            onChange={handleForm}
            value={form.description}
            minLength={2}
            maxLength={30}
            required
            placeholder="Descrição"
          />
        </label>
        <Link to={"/home"}>
          <Salvar>Salvar saída</Salvar>
        </Link>
      </Valor>
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
`;
const Topo = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 40px 0;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;

const Valor = styled.form`
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
    margin-bottom: 5%;
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
const Salvar = styled.button`
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
