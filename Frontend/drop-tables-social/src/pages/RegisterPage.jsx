import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { createUser, getUserLogin } from "../functions/user";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        profileImageUrl: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const createdUser = await createUser(formData.username, formData.email, formData.profileImageUrl);
            if (createdUser) {
                const user = await getUserLogin(formData.username);
                login(user);
                navigate("/home");
            }
        } catch (err){
            console.error(err)
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="profileImageUrl">ImageUrl</label>
                    <input
                        id="profileImageUrl"
                        name="profileImageUrl"
                        type="text"
                        value={formData.profileImageUrl}
                        onChange={handleChange}
                        placeholder="ImageUrl"
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <div>
                <a href="/login">Login here</a>
            </div>
        </div>
    )
}

export default RegisterPage;