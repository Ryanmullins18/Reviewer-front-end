import { useState } from "react";
import { useRegisterMutation } from "../redux/api";
import { useNavigate } from "react-router-dom";

function Register({setToken}){
    const initialForm = {username: "", password: ""};
    const navigate= useNavigate()

    const[form, updateForm] = useState(initialForm);
    const[showPassword, setShowPassword]= useState(false)
    const[error, setError] = useState(null);
    const[register] = useRegisterMutation(); 
    

    const handleChange = ({ target }) => {
        setError(null)
        updateForm({...form, [target.name]: target.value});
    };
    const handleSubmit= async (evt)=> {
     
        evt.preventDefault();
        console.log(form);

        if(form.username=== "" || form.password=== "") {
            setError('Please provide username and password')
            return;
       }

       const {data, error}= await register(form);

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
            <h2>Register for Best Reviews</h2>
            {error && <p>{error} </p>}
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
                type={!showPassword ? "password":"text" }
                value={password} 
                onChange={handleChange}
                />
                </label>
                <button onClick={handleSubmit}>Register</button>
            </form>
            <button onClick= {()=> setShowPassword(!showPassword)}>show password</button>
        </div>
    )
}

export default Register;