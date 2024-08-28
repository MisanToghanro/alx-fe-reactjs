import { useState } from "react";

export const RegistrationForm = () => {
const[username , setUserName] = useState("");
const[password , setPassword] = useState("");
const[email , setEmail] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
   
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

<label>Email:</label>
 <input 
 type="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 />

<label>Password:</label>
 <input 
 type="password"
 required
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 />

 <button type="submit">Register</button>
</form>
);
}
