import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    useEffect(() => {
      const userToken = localStorage.getItem("user_token");
      const userStorage = localStorage.getItem("users_bd")

      if (userToken && userStorage){
        const hasUser = JSON.parse(userStorage)?.filter((user) => {
            return user.email === JSON.parse(userToken).email
        });
        if(hasUser){
            setUser(hasUser[0])
        }
      }
    }, [])


    const singin = (email, password) => {
        if(email.length < 1 || password.length < 1){
            return "não deixe espaços em branco"
        }

        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if(hasUser?.length) {
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}));
                setUser({email, password})
                return;
            }else{
                return "E-mail ou senha incorreto";
            }
        }else{
            return "Usuário não encontrado";
        }
    };

    const singup = (email, password) => {
        if(email.length < 1 || password.length < 1){
            return "não deixe espaços em branco"
        }
    

        const usersStorage = JSON.parse(localStorage.getItem("users_bd"))
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if(hasUser?.length){
            return "Já existe esse usuário"
        }

        let newUser;

        if(usersStorage){
            newUser = [...usersStorage, {email, password}];
        }else{
            newUser = [{email, password}];
        }

        localStorage.setItem("users_bd", JSON.stringify(newUser));

        return;
    }

    const logOut = () => {
        setUser(null)
        localStorage.removeItem("user_token")
    }
    
    return (
        <AuthContext.Provider value={{singin, singed: !!user, user, singup, logOut}}>
            {children}
        </AuthContext.Provider>
    )

}