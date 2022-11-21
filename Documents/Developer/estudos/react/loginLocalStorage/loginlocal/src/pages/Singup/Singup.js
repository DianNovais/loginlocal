import "./Singup.css"

// Hooks
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";


const Singup = () => {
  const { singup, singin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const Navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      setError("Suas senhas não são iguais")
      return;
    }

    const res = singup(email, password);

    if(res){
        setError(res);
        return
    }

    singin(email, password);

    Navigate("/");
  }
  return (
    <div className="login_Container">
      <form onSubmit={handleRegister}>
        <h2>Registrar</h2>
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
        <input
          type="password"
          placeholder="Repita a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <input type="submit" className="btn_login" value="Registrar"/>
        <Link to="/login" ><p>Logar</p></Link>
        {error && (
            <p className="error_Container">{error}</p>
        )}
      </form>
    </div>
  )
}

export default Singup