import styled from "styled-components";
import vetor from "../assets/Vector.png";
import context from "../context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const { info, config } = useContext(context);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    const req = axios.get(`${process.env.REACT_APP_API_URL}/home`, config);
    req.then(
      (res) => (
        setTransactions(res.data.infos),
        setBalance(res.data.balance[0]),
        console.log(res.data)
      )
    );
    req.catch((err) => alert(err));
  }, []);

  return (
    <Container>
      <Topo>
        <p>Olá, {info.name}</p>
        <Link to={"/"}>
          <Sair src={vetor} alt={"Icone de sair"} />
        </Link>
      </Topo>
      <Registros>
        {transactions ? (
          transactions.map((t) => (
            <ListaDados>
              <Data>{t.date}</Data>
              <Descrição>{t.description}</Descrição>
              <Valor>{t.value}</Valor>
            </ListaDados>
          ))
        ) : (
          <p>
            Não há registros de <br></br>entrada ou saída
          </p>
        )}
        <Saldo>{transactions ? balance.saldo : ""}</Saldo>
      </Registros>
      <ContainerRegistros>
        <div>
          <Link to={"/nova-entrada"}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>
              Nova <br></br> entrada
            </p>
          </Link>
        </div>
        <div>
          <Link to={"/nova-saida"}>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>
              Nova <br></br> saída
            </p>
          </Link>
        </div>
      </ContainerRegistros>
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
  margin-top: 30px;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;
const Sair = styled.img`
  width: 23px;
  height: 24px;
`;

const Registros = styled.div`
  width: 326px;
  height: 446px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #868686;
  }
`;
const ContainerRegistros = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 13px 10px;

  div {
    width: 155px;
    height: 114px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    padding: 11px 9px;
    margin: 10px;
    p {
      padding-top: 33px;
    }
  }
`;

const ListaDados = styled.div`
  background-color: red;
`;

const Data = styled.div``;

const Descrição = styled.div``;

const Valor = styled.div``;

const Saldo = styled.div``;
