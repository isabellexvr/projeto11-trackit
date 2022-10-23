import styled from "styled-components"
import colors from "../constants/colors"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";

const { blue } = colors

export default function Footer() {
    const navigate = useNavigate();
    const value = 0.66;
    return (
        <FooterStyle>
            <h1 onClick={()=>navigate("/habitos")}>Hábitos</h1>
            <HojeCircle>
                <CircularProgressbar
                    value={value}
                    maxValue={1}
                    text="Hoje"
                    styles={buildStyles({
                        pathColor: "rgba(255,255,255)",
                        textSize: "18px",
                        textColor: "#ffffff",
                        trailColor: "#52B6FF",
                    })} />
            </HojeCircle>
            <h1 onClick={()=> navigate("/historico")}>Histórico</h1>
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
`;

const HojeCircle = styled.div`
    border-radius: 50%;
    background-color: ${blue};
    width: 90px;
    height: 90px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
color: white;
`;