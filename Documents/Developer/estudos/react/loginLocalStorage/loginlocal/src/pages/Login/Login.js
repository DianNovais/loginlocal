import "./Login.css";

// Hooks
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { singin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const res = singin(email, password);

    if(res){
        setError(res);
        return;
    }

    Navigate("/");
  }

  return (
    <div className="login_Container">
      <form onSubmit={handleLogin}>
        <h2>Login Local</h2>
        <input
          type="email"
          placeholder="Digite um Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Digite uma senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" className="btn_login" value="Entrar"/>
        <Link to="/singup" ><p>Se registrar</p></Link>
        {error && (
            <p className="error_Container">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
