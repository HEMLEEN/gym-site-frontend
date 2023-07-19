import React, { useState } from 'react'

const LoginForm = () => {
const [user, setUser] = useState({
    name:'',
    password:''
})

    return (
        <div class="container">
            <div class="card">
                <div class="inner-box" id="card">
                    <div class="card-front">
                        <h2>Login</h2>
                        <form >
                            <input type="email" class="input-box" name="mail" id="mail" placeholder="Email id" required />
                            <input type="password" class="input-box" name="pswrd" id="pass" placeholder="Password" required />
                            <button type="submit" class="submit-btn" id="sumbit" onclick="fnSubmit(this.form)">Submit</button>
                            <input type="checkbox"/><span style="color: azure;" >Remember Me</span>
                        </form>
                        <button type="button" class="btn" onclick="openRegister()">I'm New Here</button>
                        <a href="">Forget Password</a>

                    </div>

                    <div class="card-back">
                        <h2>Register</h2>
                        <form >
                            <div class="user">
                                <input type="text" class="input-box" id="fname" placeholder="First Name" required />
                                <input type="text" class="input-box" id="lname" placeholder="Last Name" required />
                            </div>

                            <input type="email" class="input-box" id="email" placeholder="Enter your Email" required />
                            <input type="password" class="input-box" id="pass" placeholder="Password" required />
                            <input type="password" class="input-box" id="Cpass" placeholder="Confirm Password" required />

                            <button type="submit" class="submit-btn" id="regsubmit" onclick="fnSubmitReg()">Submit</button>
                            <input type="checkbox" /><span style="color: azure;">Remember ME</span>
                        </form>
                        <button type="button" class="btn" onclick="openlogin()">I've an account</button>
                        <a href="#">Forget Password</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default LoginForm