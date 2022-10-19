import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/HomePages/LoginPage";
import SignUpPage from "./Pages/HomePages/SignUpPage";
import Hoje_Page from "./Pages/Hoje_Page/Hoje_Page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
        <Route path="/hoje" element={<Hoje_Page/>}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

