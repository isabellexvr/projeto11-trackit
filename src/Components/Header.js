import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import name_logo from ".././assets/name_logo.png";
import { useUserPic } from "../context/User";

export default function Header() {
    const navigate = useNavigate();
    const { userPic } = useUserPic()

    return (
        <HeaderStyle>
            <img alt="name_logo" src={name_logo} />
            <div>
                <UserImg data-identifier="avatar" src={userPic} />
                <a onClick={() => {
                    localStorage.removeItem("data")
                    navigate("/")
                }}>
                    LOGOUT
                </a>
            </div>

        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-size: 10px;
        color: white;
        font-family: 'Lexend Deca';
        font-weight: 500;
        a {
            font-weight: 800;
            font-size: 12px;
        }
    }
    img {
        margin-left: 18px;
    }
`;

const UserImg = styled.img`
    border-radius: 50%;
    width: 51px;
    height: 51px;
    margin-right: 18px;
    margin-bottom: 2px;
`;
