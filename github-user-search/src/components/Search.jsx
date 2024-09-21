import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
const [username , setUsername] = useState("");
const [userData , setUserData] = useState("");
const [location , setLocation] = useState("");
const [minirepos , setMinirepos] = useState("");
const [loading, setLoading] = useState(false); 
const [error , setError ]= useState("");



const handleSearch  = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true); 
  try{
const data = await fetchUserData(username , location, minirepos);
setUserData(data)
  }catch(error) {
    setError(error.message)
  }finally {
    setLoading(false);  // Stop loading after API call completes
  }
}




    return(
      <div className="container mx-auto p-4 ">
        <h1 className="text-blue-500 font-bold text-3xl mb-2">Github profiles</h1>
        <form onSubmit={handleSearch} className="rounded-md p-4 shadow-md shadow-blue-500 mb-4 max-w-md ">
<div className="mb-4">
<label className="block text-blue-500">
         user Name: </label>

          <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-400 rounded-sm py-2 px-4 w-64 "
          placeholder="Enter GitHub username" />
          
</div>
<div className="mb-4">
<label className="block  text-blue-500">user Location:</label>

          <input 
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-400 rounded-sm py-2 px-4 w-64"
          placeholder="User Location"
          />
          
</div>

<div className="mb-4">
<label className="block text-blue-500">Mini repositories:</label>

          <input 
          type="number"
          value={minirepos}
          onChange={(e) => setMinirepos(e.target.value)}
          className="border border-gray-400 rounded-sm py-2 px-4 w-64"
          placeholder="minimum repositories"
          />
          
</div>


          <button type="submit" className=" rounded-sm bg-blue-500 hover:bg-blue-600 px-6 py-2  w-64 transition duration-300 ml-4 text-white">search user</button>
        </form>
        {loading && <p className="text-blue-500">Loading...</p>}
        
        {error && <p className="text-red-500  ">{error}</p>}
       
        {userData && 
          <div className="container rounded-md shadow-md shadow-blue-500 max-w-xs text-center">
            {userData.map((user) => (
              <div key={user.id}>
            <h2 className="font-bold text-blue-500 text-lg mb-2">{userData.name}</h2>
            <img src= {userData.avatar_url} alt={user.login} className="rounded-full w-32 h-32 object-cover bg-slate-300 mb-2  mx-auto"/>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos || 'N/A'}</p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 cursor-pointer">View Profile</a>
                </div>
            ))}
           
          </div>}

          {

          }
      </div>

    )
}
export default Search;