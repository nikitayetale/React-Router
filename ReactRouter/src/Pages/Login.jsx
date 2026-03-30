import { useState } from "react";

function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = () => {
        if(user === "admin" && pass === "1234"){
            alert("Login Successful");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <>
            <style>
                {`
                    .login{
                        text-align: center;
                        margin: 250px;
                    }

                `}
            </style>
            <div className="container">
            <h2>Login Page</h2>

            <input placeholder="Username"onChange={(e)=>setUser(e.target.value)} />
            <br />

             <input type="password" placeholder="password" onChange={(e) =>setPass(e.target.value)} />
             <br />

             <button onClick={handleLogin}>Login</button>
            </div>
        </>
    );
}

export default Login;