import { useState } from "react";
import { useLoginMutation } from "../redux/api";
import { useNavigate } from "react-router-dom";

function Login({setToken}){
    const initialForm = {username: "", password: ""};
    const navigate = useNavigate();
    const[error, setError] = useState(null);
    const [form, updateForm]= useState(initialForm)
    const[login] = useLoginMutation(); 
    const handleChange = ({ target }) => {
        setError(null)
        updateForm({...form, [target.name]: target.value});
    };
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(form);

        if(form.username=== "" || form.password=== "") {
            setError('Please provide username and password')
            return;
       }

       const {data, error}= await login(form);
       if(error) {
        setError(error);
        console.log(error)
        return;
       }
       setToken(data.token)
       navigate("/items");
    }
    const {username, password} = form;
    return (
        <div>
            <h2>Login to Best Reviews</h2>
            <form>
                <label>
                    Username
                    <input 
                     name ="username" 
                     value={username}
                     onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input 
                     name="password" 
                     type="password"
                     value={password}
                     onChange={handleChange}
                    />
                </label>
            <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login;