import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../../constants/colors"
import logo from "../../assets/full_logo.png";
import URLs from "../../constants/URLs";
import { ThreeDots } from 'react-loader-spinner';
import { useUserPic } from "../../context/User";
import { useToken } from "../../context/Token";

const { blue, lightBlue, grey } = colors
const { LoginURL } = URLs

export default function LoginPage() {

    const { setToken } = useToken()
    const { setUserPic } = useUserPic()

    const navigate = useNavigate();

    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)

    function handleForm({ target: { value, name } }) {
        setForm({ ...form, [name]: value, })
    }

    function sendForm(e) {
        e.preventDefault()

        setLoading(true)

        axios.post(LoginURL, form)
            .then((answer) => {
                navigate("/hoje")
                setToken(answer.data.token)
                setUserPic(answer.data.image)
            })
            .catch(err => {
                //fazer telinha pra isso
                alert("Usuário ainda não cadastrado.")
                setLoading(false)
            })
    }

    return (
        <>
            {!loading && (
                <>
                    <PageStyleContainer>
                        <img src={logo} />
                        <FormStyle onSubmit={sendForm}>
                            <input data-identifier="input-email" placeholder="email" name="email" type="email" onChange={handleForm} required />
                            <input data-identifier="input-password" placeholder="senha" name="password" type="password" onChange={handleForm} required />
                            <LoginButton data-identifier="login-btn" type="submit" color={blue}>Entrar</LoginButton>
                        </FormStyle>
                        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
                    </PageStyleContainer>
                </>
            )}
            {loading && (
                <PageStyleContainer>
                    <img src={logo} />
                    <FormStyle onSubmit={sendForm}>
                        <input data-identifier="input-email" disabled placeholder="email" name="email" type="email" onChange={handleForm} required />
                        <input data-identifier="input-password" disabled placeholder="senha" name="password" type="password" onChange={handleForm} required />
                        <LoginButton data-identifier="login-btn" color={lightBlue} disabled>
                            <ThreeDots
                                height="50"
                                width="50"
                                radius="9"
                                color="white"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </LoginButton>
                    </FormStyle>
                    <StyledLink data-identifier="sign-up-action" to="/cadastro" disabled>Não tem uma conta? Cadastre-se!</StyledLink>
                </PageStyleContainer>
            )}
        </>
    )
};

const PageStyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 68px;
    >img{
        margin-bottom: 32px;
    }
`;

const StyledLink = styled(Link)`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    color: ${blue};
    font-weight: 400;
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        border: 1px solid ${grey};
        color: ${grey};
        padding-left: 11px;
        margin-bottom: 6px;
        font-size: 19.98px;
        border-radius: 5px;
    }
`;

const LoginButton = styled.button`
        cursor: pointer;
        margin-bottom: 25px;
        border: none;
        color: white;
        background-color: ${props => props.color};
        border-radius: 4.63636px;
        width: 303px;
        height: 45px;
        font-size: 20.98px;
        display: flex;
        justify-content: center;
        align-items:center;
`;