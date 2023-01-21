import styled from "styled-components";
import { useState } from "react";

export default function NovaSaida() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Topo>
        <p>Nova saída</p>
      </Topo>
      <Valor>
        <label>
          <input
            type="number"
            name="number"
            onChange={handleForm}
            value={form.number}
            minLength={1}
            required
            placeholder="Valor"
          />
        </label>
        <label>
          <input
            type="text"
            name="text"
            onChange={handleForm}
            value={form.text}
            minLength={2}
            maxLength={30}
            required
            placeholder="Descrição"
          />
        </label>
        <Salvar>Salvar saída</Salvar>
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
