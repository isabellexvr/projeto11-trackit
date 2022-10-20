import styled from "styled-components";
import { FaCheckSquare } from 'react-icons/fa';

//fazer aparecer somente após o login; se não estiver logado, aparecer algo (erro) para voltar à página inicial

export default function Habit() {
    return (
        <HabitStyle>
            
            <div>
            <Title>Ler 1 capítulo de livro</Title>
                <Progress>Sequência atual: 3 dias
                    <br/>
                    Seu recorde: 5 dias</Progress>
            </div>
            <FaCheckSquare/>
        </HabitStyle>
    )
}

const HabitStyle = styled.div`
    width: 92%;
    height: 94px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        width: 69px;
        height: 69px;
        color: #EBEBEB;
        margin-right: 13px;
    }
`
const Title = styled.h1`
    color: #666666;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-bottom: 7px;
margin-left: 15px;
`

const Progress = styled.p`
    color: #666666;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
margin-left: 15px;
`

