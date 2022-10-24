import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import colors from "../../constants/colors";
import URLs from "../../constants/URLs";

const { darkBlue } = colors
const { HabitsHistoryURL } = URLs

export default function Historico_Page() {
    return (
        <PageStyle>
            <Header />
            <Title>Histórico</Title>
            <EmptyWarning>Em breve você poderá ver o histórico dos seus hábitos aqui!</EmptyWarning>
            <Footer />
        </PageStyle>
    )
}

const PageStyle = styled.div`
    padding-top: 98px;
    height: 155vw;
    background-color: #F2F2F2;
`;

const Title = styled.h1`
    color: ${darkBlue};
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    font-weight: 400;
    margin-left: 17px;
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