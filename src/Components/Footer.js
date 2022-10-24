import styled from "styled-components"
import colors from "../constants/colors"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";

const { blue } = colors

export default function Footer() {
    const navigate = useNavigate();
    const value = 50;
    return (
        <FooterStyle>
            <h1 onClick={() => navigate("/habitos")}>Hábitos</h1>
            <HojeCircle onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    
                    value={value}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: `${blue}`,
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </HojeCircle>

            <h1 onClick={() => navigate("/historico")}>Histórico</h1>
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
    font-family: 'Lexend Deca';
    h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: ${blue};
    }
    svg {
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
        font-size: 17.98px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const HojeCircle = styled.div`
    border-radius: 50%;

    width: 90px;
    height: 90px;
    margin-bottom: 50px;
    font-family: 'Lexend Deca';
    font-size: 17.976px;
`;