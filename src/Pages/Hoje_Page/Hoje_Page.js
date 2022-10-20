import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import weekdays from "../../constants/weekdays";
import colors from "../../constants/colors";
import Habit from "../../Components/Habit";

const { blue, grey, darkBlue } = colors

export default function Hoje_Page() {


    const weekday = new Date().getDay()
    const monthDay = new Date().getDate()
    const month = new Date().getMonth()

    return (
        <PageStyle>
            <Header />
            <DateStyle>{weekdays[weekday]}, {monthDay}/{month}</DateStyle>
            <HabitsNumberStyle>Nenhum hábito concluído ainda</HabitsNumberStyle>
            <Habit/>
            <Habit/>
            <Habit/>
            <Footer/>
        </PageStyle>
    )
}

//ajustar esse height aqui
const PageStyle = styled.div`
    padding-top: 98px;
    height: 155vw;
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
    color: #BABABA;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Lexend Deca', sans-serif;
    margin-left: 17px;
    margin-top: 6px;
    margin-bottom: 28px;

`