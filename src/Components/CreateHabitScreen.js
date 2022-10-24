import styled from "styled-components";
import colors from ".././constants/colors";
import axios from "axios";
import URLs from ".././constants/URLs";
import { useToken } from ".././context/Token";
import { ThreeDots } from 'react-loader-spinner';
import { useState } from "react";

const { CreateHabitURL } = URLs
const { lightBlue, blue } = colors

export default function CreateHabitSreen({ setCreateScreen, setLoading, loading }) {

    const { token } = useToken()

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

    const [selectedDays, setSelectedDays] = useState([]);
    const [habitTitle, setHabitTitle] = useState("");

    function daysSelection(id) {
        if (selectedDays.some(d => id === d)) {
            const newLista = selectedDays.filter(d => id + 1 !== d)
            setSelectedDays(newLista)
            console.log(newLista)
        } else {
            const newLista = [...selectedDays, id]
            setSelectedDays(newLista)
            console.log(newLista)
        }
    }

    function handleForm() {
        setLoading(true)
        if (selectedDays.length > 0 && habitTitle.length >= 3) {
            console.log(selectedDays)
            const config = {
                headers: { "Authorization": "Bearer " + token }
            }
            axios.post(CreateHabitURL,{name: habitTitle,days: selectedDays},config)
                .then(answer => {
                    setLoading(false)
                    setCreateScreen(false)
                    setHabitTitle("")
                    setSelectedDays([])
                })
                .catch(err => {
                    setLoading(false)
                    alert("aaa")
                })
        } else {
            alert("Insira um nome válido (3 caracteres ou mais) e selecione ao menos UM dia da semana.")
            setLoading(false)
        }
    }

    return (
        <CreateHabitSreenStyle>
            {!loading && (
                <>
                    <input data-identifier="input-habit-name" value={habitTitle} onChange={e => setHabitTitle(e.target.value)} type="text" placeholder="nome do hábito" />
                    <div>
                        {weekDays.map((weekDay, id) =>
                            <WeekDayButton data-identifier="week-day-btn" isSelected={selectedDays.includes(id)} key={id} onClick={() => daysSelection(id)}>
                                {weekDay}
                            </WeekDayButton>
                        )}
                    </div>
                    <SubmitButtons>
                        <CancelButton data-identifier="cancel-habit-create-btn" onClick={() => setCreateScreen(false)}>Cancelar</CancelButton>
                        <SaveButton data-identifier="save-habit-create-btn" color={blue} onClick={handleForm}>Salvar</SaveButton>
                    </SubmitButtons>
                </>
            )}
            {loading && (
                <>
                    <input disabled value={habitTitle} onChange={e => setHabitTitle(e.target.value)} type="text" placeholder="nome do hábito" />
                    <div>
                        {weekDays.map((weekDay, id) =>
                            <WeekDayButton isSelected={selectedDays.includes(id + 1)} key={id} onClick={() => daysSelection(id)}>
                                {weekDay}
                            </WeekDayButton>
                        )}
                    </div>
                    <SubmitButtons>
                        <CancelButton disabled onClick={() => setCreateScreen(false)}>Cancelar</CancelButton>
                        <SaveButton disabled color={lightBlue} onClick={handleForm}>
                            <ThreeDots
                                height="50"
                                width="50"
                                radius="9"
                                color="white"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </SaveButton>
                    </SubmitButtons>
                </>
            )}
        </CreateHabitSreenStyle>
    )
}

const CreateHabitSreenStyle = styled.div`
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
background-color: ${props => props.color};
color: white;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
border: none;
border-radius: 4.63636px;
margin-left: 6px;
display: flex;
justify-content: center;
align-items: center;
`;