import { useState } from "react";

function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = () => {

        const data = [user,pass]
        async function postCake() {
            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log(result);
                alert(result.message);
            } catch (error) {
                console.error('Error adding cake:', error);
            }
        }
        postCake();
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