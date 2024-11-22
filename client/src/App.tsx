import InitialLoginPage from "./components/InitialLoginPage";
import RegisterForm from "./components/RegisterForm";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
   <Router>
      <Routes>
         <Route path="/" element={<InitialLoginPage />} /> // Rota da página
         inicial
         <Route path="/register" element={<RegisterForm />} /> // Rota da página
         "Sobre"
      </Routes>
   </Router>
);

export default App;
