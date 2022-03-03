import React from 'react'
import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
        <div className="login-title">
            Login Form
        </div>
        <div className="login-form">
            username<input type="text" name="name" id="" />
            password<input type="text" name="password" id="" />
        </div>
    </div>
  )
}
