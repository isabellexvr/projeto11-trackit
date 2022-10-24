import styled from "styled-components";
import Header from "../../Components/Header";
import colors from "../../constants/colors";
import { FaPlusSquare } from 'react-icons/fa';
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import { useToken } from "../../context/Token";
import axios from "axios";
import URLs from "../../constants/URLs";
import CreateHabitSreen from "../../Components/CreateHabitScreen";
import Habitos_Habit from "../../Components/Habitos_Habit";

const { darkBlue, blue } = colors
const { GetHabitsURL } = URLs

export default function Habitos_Page() {
    const { token } = useToken()

    const config = {
        headers: { "Authorization": "Bearer " + token }
    }

    const [createScreen, setCreateScreen] = useState(false);

    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(GetHabitsURL, config)
            .then((answer) => {
                setHabits(answer.data)
            })
            .catch(err => console.log(err.responde.data.message))
    }, [loading])


    return (
        <PageStyle>
            <Header />
            <TitleContainer>
                <TitleStyle>Meus Hábitos</TitleStyle>
                <FaPlusSquare onClick={() => createScreen ? setCreateScreen(false) : setCreateScreen(true)} />
            </TitleContainer>
            {createScreen && (
                <CreateHabitSreen loading={loading} setLoading={setLoading} setCreateScreen={setCreateScreen} />
            )}
            {habits.length < 1 && (
                <EmptyWarning>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</EmptyWarning>
            )}
            {habits.length > 0 && (
                <Habitos_Habit setLoading={setLoading} habits={habits}>a</Habitos_Habit>
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
    padding-bottom: 34px;
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

const EmptyWarning = styled.p`
    color: #666666;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    width: 338px;
    margin: 0 auto;
    margin-top: 29px;
    line-height: 22px;
`;