import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import colors from "../../constants/colors"
import logo from "../../assets/full_logo.png";
import URLs from "../../constants/URLs";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

const { blue, lightBlue, grey } = colors;
const { SignUpURL } = URLs;

export default function SignUpPage() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({});

    function handleForm({ target: { value, name } }) {
        setForm({ ...form, [name]: value, });
    };

    function sendForm(e) {
        e.preventDefault();

        setLoading(true);

        axios.post(SignUpURL, form)
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(err => {
                alert(err.response.data.message);
                setLoading(false);
            })
    };

    return (
        <HomePageStyle>
            {!loading && (
                <>
                    <img alt="logo" src={logo} />
                    <FormStyle onSubmit={sendForm}>
                        <input data-identifier="input-email" placeholder="email" name="email" type="email" onChange={handleForm} required />
                        <input data-identifier="input-password" placeholder="senha" name="password" type="password" onChange={handleForm} required />
                        <input data-identifier="input-name" placeholder="nome" name="name" type="name" onChange={handleForm} required />
                        <input data-identifier="input-photo" placeholder="foto" name="image" type="URL" onChange={handleForm} required />
                        <SignUpButton type="submit" color={blue} >Cadastrar-se</SignUpButton>
                    </FormStyle>
                    <StyledLink data-identifier="back-to-login-action" to="/">Já tem uma conta? Faça login!</StyledLink>
                </>
            )}
            {loading && (
                <>
                    <img alt="logo" src={logo} />
                    <FormStyle onSubmit={sendForm}>
                        <input data-identifier="input-email" disabled placeholder="email" name="email" type="email" onChange={handleForm} required />
                        <input data-identifier="input-password" disabled placeholder="senha" name="password" type="password" onChange={handleForm} required />
                        <input data-identifier="input-name" disabled placeholder="nome" name="name" type="name" onChange={handleForm} required />
                        <input data-identifier="input-photo" disabled placeholder="foto" name="image" type="URL" onChange={handleForm} required />
                        <SignUpButton disabled color={lightBlue} >
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
                        </SignUpButton>
                    </FormStyle>
                    <StyledLink data-identifier="back-to-login-action" to="/" disabled>Já tem uma conta? Faça login!</StyledLink>
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
        width: 293px;
        height: 45px;
        border: 1px solid ${grey};
        color: ${grey};
        padding-left: 11px;
        margin-bottom: 6px;
        font-size: 19.98px;
        border-radius: 5px;
    }
    button{
        margin-bottom: 25px;
        border: none;
        color: white;
        background-color: ${blue};
        border-radius: 4.63636px;
        width: 303px;
        height: 45px;
        font-size: 20.98px;
    }
`;

const SignUpButton = styled.button`
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