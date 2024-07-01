import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="auth-container flex f-center">
            <form className="auth-form flex f-column f-center">
                <h2>Register</h2>
                <div className="inp flex f-between f-center">
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" />
                </div>
                <div className="inp flex f-between f-center">
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" />
                </div>
                <div className="inp flex f-between f-center">
                    <label>Phone</label>
                    <input type="number" placeholder="Enter Phonenumber" />
                </div>
                <div className="inp flex f-between f-center">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" />
                </div>
                <div className="redirect-link flex f-between">
                    Already an User?{" "}
                    <Link className="link" to="/">
                        Login
                    </Link>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
