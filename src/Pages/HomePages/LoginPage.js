import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../../constants/colors"
import logo from "../../assets/full_logo.png";
import URLs from "../../constants/URLs";
import { ThreeDots } from 'react-loader-spinner';
import { useUserPic } from "../../context/User";
import ThemeContainer from "../../Components/ThemeContainer";
import { useTheme, themes } from "../../context/Theme";

const { blue, lightBlue, grey } = colors
const { LoginURL } = URLs

export default function LoginPage({ setToken }) {

    const { setTheme, theme } = useTheme()

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
                console.log(answer.data)
            })
            .catch(err => {
                //fazer telinha pra isso
                alert("Usuário ainda não cadastrado.")
                setLoading(false)
                console.log(err.responde.data)
            })

        console.log(form)
    }

    return (
        <>
            {!loading && (
                <>
                    <ThemeContainer>
                        <SwitchThemes >
                            <h1>DarkMode</h1>
                            <input onClick={()=> {
                                setTheme(theme.name === "dark" ? themes[1] : themes[0]) 
                                console.log(theme)
                                }} type="checkbox"></input>
                            <label htmlFor="darkmode-toggle">
                                <div className="ball"></div>
                            </label>
                        </SwitchThemes>
                        <PageStyleContainer>
                            <img src={logo} />
                            <FormStyle onSubmit={sendForm}>
                                <input placeholder="email" name="email" type="email" onChange={handleForm} required />
                                <input placeholder="senha" name="password" type="password" onChange={handleForm} required />
                                <LoginButton type="submit" color={blue}>Entrar</LoginButton>
                            </FormStyle>
                            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
                        </PageStyleContainer>
                    </ThemeContainer>
                </>
            )}
            {loading && (
                <ThemeContainer>

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
                    <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
                </ThemeContainer>
            )}
        </>
    )
};

const PageStyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
`;

const SwitchThemes = styled.div`
position: relative;
margin-left: 50px;
padding-top: 28px;
h1 {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    bottom: 27px;
    left: -15px;
}
label {
    cursor: pointer;
  width: 30px;
  height: 10px;
  background-color:#111;
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  .ball {
    cursor: pointer;
    width: 14px;
  height: 14px;
  background-color: white;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  }
}
input {
    position: absolute;
    z-index: 1;
    width: 40px;
    opacity: 0;
    cursor: pointer;
}
input:checked + label .ball{
    transform: translateX(20px);
    background-color: grey;

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