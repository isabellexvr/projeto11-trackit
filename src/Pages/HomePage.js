import logo from "../assets/logo.png";
import colors from "../constants/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

const {blue, grey} = colors

export default function HomePage(){
    return (
        <PageStyle>
            <img alt="page_logo" src={logo}/>
            
            <FormStyle>
                <input placeholder="email"/>
                <input placeholder="senha"/>
                <button>Entrar</button>
            </FormStyle>
            <Link>Não tem uma conta? Cadastre-se!</Link>
        </PageStyle>
    )
}

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 68px;
  img{
    margin-bottom: 32.62px;
  }
  a{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13.98px;
    color: ${blue};
  }
`;
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    input {
        width: 293px;
        height: 45px;
        border: 1px solid ${grey};
        color: ${grey};
        padding-left: 11px;
        margin-bottom: 6px;
        font-size: 19.98px;
        border-radius: 5px;
    }
    button{
        margin-bottom: 25px;
        border: none;
        color: white;
        background-color: ${blue};
        border-radius: 4.63636px;
        width: 303px;
        height: 45px;
        font-size: 20.98px;
    }
`;