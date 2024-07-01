import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const validate = (e) => {
        e.preventDefault();
        // validation code
        handleSubmit();
    };

    const handleSubmit = () => {
        toast.success("Login Successful !");
        setTimeout(() => {
            navigate("/home");
        }, 2500);
    };

    return (
        <div className="auth-container flex f-center">
            <ToastContainer theme="colored" autoClose={2000} />
            <form
                onSubmit={validate}
                className="auth-form flex f-column f-center"
            >
                <h2>LOGIN</h2>
                <div className="inp flex f-between f-center">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="inp flex f-between f-center">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="redirect-link flex f-between">
                    New User?{" "}
                    <Link className="link" to="/signup">
                        Register
                    </Link>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
