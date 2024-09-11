
const UserProfile=()=> {
    return (
      <div className="user-profile   md:bg-gray-100 md:p-8 md:max-w-sm md:mx-auto,my-20 rounded-lg shadow-lg 
      hover:shadow-xl
      
      sm:p-4 sm:max-w-xs
     sm:bg-white-500
      ">

        <img className="img rounded-full md:w-36 md:h-36 
        sm:w-24 sm:h-24 mx-auto
        hover:scale-110
        transition-transform duration-300 ease-in-out
        md:cursor-pointer" 
        src="https://via.placeholder.com/150" alt="User" />

        <h1 className="h1  md:text-blue-800 md:my-4
        md:text-xl sm:text-green-600 sm:text-lg
         hover:md:text-blue-500
" >John Doe</h1>

        <p className="p md:text-gray-600 text-base
        sm:text-green-700
        sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
        
        <p className="sm:text-blue-600">why isnt this working</p>
      </div>
    );
  }
  
  export default UserProfile;