import { useTheme } from "../context/Theme";
import styled from "styled-components";

export default function ThemeContainer({children}){

    const {theme} = useTheme()

    return (
        <BackgroundTheme background={theme}>
            {children}
        </BackgroundTheme>
        
    )
}

const BackgroundTheme = styled.div`
    background-color: ${props => props.background};
    height: 150vw;
    width: 100%;


`;