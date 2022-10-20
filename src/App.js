import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/HomePages/LoginPage";
import SignUpPage from "./Pages/HomePages/SignUpPage";
import Hoje_Page from "./Pages/Hoje_Page/Hoje_Page";
import Habitos_Page from "./Pages/Habitos_Page/Habitos_Page";
import { useState } from "react";
import UserPicProvider from "./context/User";

export default function App() {

  const [token, setToken] = useState()

  return (
    <UserPicProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setToken={setToken} />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/hoje" element={<Hoje_Page />} />
          <Route path="/habitos" element={<Habitos_Page />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </UserPicProvider>
  )
}

