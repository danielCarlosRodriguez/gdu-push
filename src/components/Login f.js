import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";






export const Login = () => {

   const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    } else {
      setPassword(value);
    }
  }

  console.log("usuario: ", user);
  function handleSubmit() {
    let account = { user, password };
    if (account) {
      console.log("account: ", account);
    }
  }
   
      
  
    //fetch("https://api-test.disco.com.uy/auth/token", {
    // fetch("https://api-test.disco.com.uy/auth/token", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-type": "application/json",
    //   },
    //   //body: JSON.stringify({ username: user, password: pass, }),
    //   body: JSON.stringify(datos),
    // }) /*end fetch */
    //   .then((response) => {
    //       response.json();
    //       localStorage.setItem("token", response.data.result.token)
    //   })
    //   .then((obj) => {
    //     console.log(obj.results);
    //   })
    //   .catch((err) => console.error("error del catch", err));

    
// axios
//   .post(baseURL, {
//     title: "Hello World!",
//     body: JSON.stringify(datos),
//   })
//   .then((response) => {
//     console.log(response.data);
//   });


 // };



    //  useEffect(() => {
    //    console.log("loginEstado en useEffect: ", loginEstado);
    //    loginEstado ? navi("/dashboard") : console.log("me quedo tranqui");
    //  }, [loginEstado]);
    

  
  

  return (
    <div className="col-4 ms-5 mt-5">
      <Input
        attribute={{
          id: "usuario",
          name: "usuario",
          type: "text",
          placeholder: "ingrese un usuario",
        }}
        handleChange={handleChange}
      />
      <Input
        attribute={{
          id: "password",
          name: "password",
          type: "password",
          placeholder: "ingrese un password",
        }}
        handleChange={handleChange}
      
      />
      <div className="btn btn-push" onClick={handleSubmit}>
        Pusheame
      </div>
    </div>
  );
};






