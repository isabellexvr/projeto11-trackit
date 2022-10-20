import styled from "styled-components"
import colors from "../constants/colors"

const {blue} = colors

export default function Footer(){
    return (
        <FooterStyle>
            <h1>Hábitos</h1>
            <HojeCircle>Hoje</HojeCircle>
            <h1>Histórico</h1>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    height: 70px;
    width: 100%;
    position: relative;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1 {
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
color: ${blue}
    }
`

const HojeCircle = styled.div`
    border-radius: 50%;
    background-color: ${blue};
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
color: white;
`