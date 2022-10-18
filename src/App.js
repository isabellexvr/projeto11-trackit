import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

