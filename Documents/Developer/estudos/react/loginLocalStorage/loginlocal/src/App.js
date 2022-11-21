
// hooks
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CSS
import "./App.css";

// Context Privider

// Context Hook
import useAuth from "./hooks/useAuth";

// Pages
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  const {singed} = useAuth();

  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={singed ? <Home /> : <Login />} />
            <Route path="/" element={singed ? <Home /> : <Login />} />
            <Route path="/singup" element={singed ? <Home /> : <Singup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
