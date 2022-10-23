import styled from "styled-components";
import Header from "../../Components/Header";
import colors from "../../constants/colors";
import { FaPlusSquare } from 'react-icons/fa';
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useToken } from "../../context/Token";
import axios from "axios";
import URLs from "../../constants/URLs";

const { darkBlue, blue } = colors
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
const { CreateHabitURL } = URLs

export default function Habitos_Page() {

    const { token } = useToken()

    const [createScreen, setCreateScreen] = useState(true);

    const [selectedDays, setSelectedDays] = useState([]);
    const [habitTitle, setHabitTitle] = useState("")

    function daysSelection(id) {
        if (selectedDays.some(d => id + 1 === d)) {
            const newLista = selectedDays.filter(d => id + 1 !== d)
            setSelectedDays(newLista)
        } else {
            const newLista = [...selectedDays, id + 1]
            setSelectedDays(newLista)
        }
    }

    function handleForm() {
        if (selectedDays.length > 0 && habitTitle.length > 3) {

            const body = {
                name: habitTitle,
                days: selectedDays
            }

            const config = {
                headers: { "Authorization": "Bearer " + token }
            }

            axios.post(CreateHabitURL, body, config)
                .then(answer => console.log(answer))
                .catch(err => console.log(err.response.data))
        } else {
            alert("insira um nome válido (3 ou mais caracteres) e selcione pelo menos um dia da semana!")
        }

    }

    return (
        <PageStyle>
            <Header />
            <TitleContainer>
                <TitleStyle>Meus Hábitos</TitleStyle>
                <FaPlusSquare onClick={() => createScreen ? setCreateScreen(false) : setCreateScreen(true)} />
            </TitleContainer>
            {createScreen && (
                <CreateHabitSreen>
                    <input value={habitTitle} onChange={e => setHabitTitle(e.target.value)} type="text" placeholder="nome do hábito" />
                    <div>
                        {weekDays.map((weekDay, id) =>
                            <WeekDayButton isSelected={selectedDays.includes(id+1)} key={id} onClick={() => daysSelection(id)}>
                                {weekDay}
                            </WeekDayButton>
                        )}
                    </div>
                    <SubmitButtons>
                        <CancelButton onClick={() => setCreateScreen(false)}>Cancelar</CancelButton>
                        <SaveButton onClick={handleForm}>Salvar</SaveButton>
                    </SubmitButtons>
                </CreateHabitSreen>
            )}

            <Footer />
        </PageStyle>
    )
};

const TitleStyle = styled.h1`
    color: ${darkBlue};
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    font-weight: 400;
    margin-left: 17px;
`;

const PageStyle = styled.div`
    padding-top: 98px;
    height: 155vw;
    background-color: #F2F2F2;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    svg{
        margin-right: 18px;
        width: 40px;
        height: 35px;
        color: ${blue};
    }
`;

const CreateHabitSreen = styled.div`
    width: 340px;
    height: 180px;
    background-color: white;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 5px;
    input{
        margin-top: 18px;
        margin-left: 19px;
        box-sizing: border-box;
        padding-left: 11px;
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            color: #DBDBDB;
        }
    }
    >div{
        display: flex;
        margin-left: 19px;
    }
`;

const WeekDayButton = styled.div`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: ${props => props.isSelected ? "white" : "#DBDBDB"};
    background-color: ${props => props.isSelected ? "#DBDBDB" : "white"};
    margin-right: 4px;
    margin-top: 8px;
`;

const SubmitButtons = styled.div`
    margin-top: 29px;
    width: 308px;
    display: flex;
    justify-content: flex-end;
`;

const CancelButton = styled.button`
    width: 84px;
height: 35px;
background-color: white;
color: ${blue};
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
border: none;
border-radius: 4.63636px;
`;

const SaveButton = styled.button`
width: 84px;
height: 35px;
background-color: ${blue};
color: white;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
border: none;
border-radius: 4.63636px;
margin-left: 6px;
`;

