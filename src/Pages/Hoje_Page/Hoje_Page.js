import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import weekdays from "../../constants/weekdays";
import colors from "../../constants/colors";
import Hoje_Habit from "../../Components/Hoje_Habit";
import { useEffect, useState } from "react";
import axios from "axios";
import URLs from "../../constants/URLs";
import { useToken } from "../../context/Token";
import { ThreeDots } from 'react-loader-spinner';

const { GetTodayHabitsURL } = URLs
const { darkBlue, blue } = colors

export default function Hoje_Page() {

    const { token } = useToken();

    const weekday = new Date().getDay();
    const monthDay = new Date().getDate();
    const month = (new Date().getMonth()) + 1;

    const [todayHabits, setTodayHabits] = useState([])
    const [completedHabits, setCompletedHabits] = useState([])

    useEffect(() => {
        axios.get(GetTodayHabitsURL, {
            headers: { "Authorization": "Bearer " + token }
        })
            .then(answer => {
                setTodayHabits(answer.data)
                const alreadyComplete = answer.data.filter(h => h.done === true)
                setCompletedHabits(alreadyComplete)
            })
            .catch(err => console.log(err.response.data))
    }, [completedHabits, todayHabits])

    const percentage = ((completedHabits.length * 100) / todayHabits.length).toFixed(0)

    return (
        <PageStyle numberOfHabits={todayHabits.length}>
            <Header />
            <DateStyle data-identifier="today-infos">{weekdays[weekday]}, {monthDay}/{month >= 10 ? month : "0" + month}</DateStyle>
            {(percentage <= 0 || todayHabits.length < 1) && (
                <HabitsNumberStyle color={"#BABABA"}>
                    Nenhum hábito concluído ainda
                </HabitsNumberStyle>
            )}
            {percentage > 0 && (
                <>
                    <HabitsNumberStyle data-identifier="today-infos" color={"#8FC549"}>
                        {percentage}% dos hábitos concluídos
                    </HabitsNumberStyle>
                </>
            )}
            {todayHabits.length < 1 && (
                <LoadingContainer>
                    <ThreeDots
                        height="100"
                        width="100"
                        radius="9"
                        color={blue}
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                <HabitsNumberStyle color={darkBlue}>Carregando...</HabitsNumberStyle>
                </LoadingContainer>
            )}
            {todayHabits && (
                todayHabits.map((habit, i) =>
                    <Hoje_Habit key={i} habit={habit} completedHabits={completedHabits} setCompletedHabits={setCompletedHabits}>
                        <div>
                            <Title>{habit.name}</Title>
                            <Progress>
                                Sequência atual: <Sequence color={completedHabits.includes(habit) ? "#8FC549" : "#666666"}>{habit.currentSequence} dias</Sequence>
                                <br />
                                Seu recorde: <Sequence color={((habit.highestSequence === habit.currentSequence) && (habit.highestSequence > 0) && (habit.currentSequence > 0)) ? "#8FC549" : "#666666"}>{habit.highestSequence} dias</Sequence>
                            </Progress>
                        </div>
                    </Hoje_Habit>
                )
            )}
            <Footer />
        </PageStyle>
    )
}

const PageStyle = styled.div`
    padding-top: 98px;
    padding-bottom: 30px;
    margin-bottom: 35px;
    height: 150vw;
    background-color: #F2F2F2;
`;

const DateStyle = styled.h1`
    color: ${darkBlue};
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    font-weight: 400;
    margin-left: 17px;
`;

const HabitsNumberStyle = styled.h2`
    color: ${props => props.color};
    font-size: 18px;
    font-weight: 400;
    font-family: 'Lexend Deca', sans-serif;
    margin-left: 17px;
    margin-top: 10px;
    margin-bottom: 26px;
`;

const Title = styled.h1`
    color: #666666;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-bottom: 7px;
margin-left: 15px;
`;

const Progress = styled.p`
    color:"#666666";
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    margin-left: 15px;
`;

const Sequence = styled.strong`
    color: ${props => props.color};
`;

const LoadingContainer = styled.div`
    h2 {
        font-size: 23px;
        margin-bottom: 5px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;