import styled from "styled-components";
import name_logo from ".././assets/name_logo.png";
import { useUserPic } from "../context/User";

export default function Header(){

    const { userPic } = useUserPic()

    return (
        <HeaderStyle>
                <img alt="name_logo" src={name_logo}/>
                <UserImg src={userPic}/>
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
    img {
        margin-left: 18px;
    }
`;

const UserImg = styled.img`
    border-radius: 50%;
    width: 51px;
    height: 51px;
    margin-right: 18px;
`;
