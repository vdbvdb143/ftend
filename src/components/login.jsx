import axios from "axios";
import React from "react";

import "../css/login.css";

const login = ()=>{
  const loginFormHandler = (event)=>{
    event.preventDefault();
    let data={};
    data.username=event.target.username.value.trim();
    data.password = event.target.password.value.trim();
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/user/check/",data)
      .then((res)=>{
        if(res.data.status===true){
          console.log(res);
        }
        else  {
          console.log(res);
        }
      });
  }
  
  return(
      <section class='login' id='login'>
        <div class='head'>
          <h1 class='company'>ERP</h1>
        </div>
        <p class='msg'>Welcome back</p>
        <div class='form'>

          <form onSubmit={loginFormHandler}>
            <input type="text" name="username" placeholder='Username' class='text' id='username'/><br/>
            <input type="password" name="password" placeholder='••••••••••••••' class='password'/><br/>
            <button className="primary" type="submit">Submit</button>
            {/* <a href="#" class='forgot'>Forgot?</a> */}
          </form>

        </div>
      </section>
  );
}

export default login;