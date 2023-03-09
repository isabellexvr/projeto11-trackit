import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/HomePages/LoginPage";
import SignUpPage from "./Pages/HomePages/SignUpPage";
import Hoje_Page from "./Pages/Hoje_Page/Hoje_Page";
import Habitos_Page from "./Pages/Habitos_Page/Habitos_Page";
import UserPicProvider from "./context/User";
import Historico_Page from "./Pages/Historico_Page/Historico_Page";
import TokenProvider from "./context/Token";
import PercentageProvider from "./context/Percentage";

export default function App() {
  return (
    <TokenProvider>
      <UserPicProvider>
        <PercentageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path="/hoje" element={<Hoje_Page />} />
              <Route path="/habitos" element={<Habitos_Page />} />
              <Route path="/historico" element={<Historico_Page />} />
            </Routes>
            <GlobalStyle />
          </BrowserRouter>
        </PercentageProvider>
      </UserPicProvider>
    </TokenProvider>
  );
}
