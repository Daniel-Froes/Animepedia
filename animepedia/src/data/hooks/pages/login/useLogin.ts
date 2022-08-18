import { useState } from "react";
import { ApiService } from "../../../services/ApiService";

export function useLogin() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
  
    const handleSubmit = async () => {
      const dados = {
        email: email,
        password: senha,
      };
      ApiService(`api/v1/usuarios/login`, {
        method: "POST",
        data: dados,
      
      }).then(res => {
        if (res.status === 200) {
          
          console.log(res)
      }}).catch(err => {
          console.log(err.response.data);
      })
    }

    return {
        email,
        senha,
        setEmail,
        setSenha,
        handleSubmit
    }
}
