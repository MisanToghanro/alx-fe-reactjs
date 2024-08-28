import { useState } from "react";

export const RegistrationForm = () => {
const[username , setUserName] = useState("");
const[password , setPassword] = useState("");
const[email , setEmail] = useState("");
const [errors , setErrors] = useState({})

const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors ={}

    if(!username){
        formErrors.username = "username is required"
    }

    if(!password){
        formErrors.password = "password is required"
    }
   
    if(!email){
        formErrors.email = "email is required"
    }

    setErrors(formErrors);

    if(Object.keys(formErrors).length ===0){
        console.log('User Registered:', { username, email, password });

        setUserName('');
        setEmail('');
        setPassword('');
    }
}



return(
<form onChange={handleSubmit}>
    <h1>Registration Form</h1>
    <label>Username:</label>
<input
type="text"
required
value={username}
onChange={(e) => setUserName(e.target.value)}
 />
   {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}

<label>Email:</label>
 <input 
 type="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 />
 {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

<label>Password:</label>
 <input 
 type="password"
 required
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 />
  {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

 <button type="submit">Register</button>
</form>
);
}
