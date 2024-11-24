import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { getUserLogin } from "../functions/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { login } = useContext(UserContext);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = await getUserLogin(userName);
        login(user);
        navigate("/home")
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div>
                <a href="/register">Register Here</a>
            </div>
        </div>
    )
}

export default LoginPage;