import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../../constants/colors"
import logo from "../../assets/logo.png";
import URLs from "../../constants/URLs";
import { ThreeDots } from 'react-loader-spinner'

const { blue, lightBlue, grey } = colors
const { LoginURL } = URLs

export default function LoginPage() {

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
            .then(() => navigate("/hoje"))
            .catch(err => {
                //fazer telinha pra isso
                alert("Usuário ainda não cadastrado.")
                setLoading(false)
                console.log(err.responde.data)
            })

        console.log(form)
    }

    return (
        <HomePageStyle>
            {!loading && (
                <>
                    <img src={logo} />
                    <FormStyle onSubmit={sendForm}>
                        <input placeholder="email" name="email" type="email" onChange={handleForm} required />
                        <input placeholder="senha" name="password" type="password" onChange={handleForm} required />
                        <LoginButton color={blue}>Entrar</LoginButton>
                    </FormStyle>
                    <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
                </>
            )}
            {loading && (
                <>
                    <img src={logo} />
                    <FormStyle onSubmit={sendForm}>
                        <input disabled placeholder="email" name="email" type="email" onChange={handleForm} required />
                        <input disabled placeholder="senha" name="password" type="password" onChange={handleForm} required />
                        <LoginButton color={lightBlue} disabled>
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
                    <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
                </>
            )}
        </HomePageStyle>
    )
}

const HomePageStyle = styled.div`
    margin-top: 68px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
a{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    color: ${blue};
    font-weight: 400;
}
`

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    input {
        width: 293px;
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