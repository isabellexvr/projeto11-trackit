import styled from "styled-components";
import Header from "../../Components/Header";
import colors from "../../constants/colors";
import { FaPlusSquare } from 'react-icons/fa';

const { darkBlue, blue } = colors

export default function Habitos_Page() {
    return (
        <PageStyle>
            <Header />
            <TitleContainer>
                <TitleStyle>Meus Hábitos</TitleStyle>
                <FaPlusSquare/>
            </TitleContainer>

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
`