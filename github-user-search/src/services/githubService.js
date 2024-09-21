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
            .get(`https://api.github.com/search/users?${query}`);
        return response.data.items;
    } catch (error) {
        throw new Error('User not found');
    }
    
}
export default fetchUserData;

