import axios from "axios";

const fetchUserData =  async (username , location , minirepos) => {
 let query = `q=${username}`

 if(location){
    query += `+locaton:${location}`
 }
 if (minirepos){
    query += `+minirepos:${minirepos}`
 }
   try {
        const response = await axios
            .get(`https://api.github.com/search/users?${query}`,
             {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
                  },
                }
            );
           
        return response.data.items;
    } catch (error) {
        throw new Error("Looks like we cant find the user");
    }
    
};
export default fetchUserData;

