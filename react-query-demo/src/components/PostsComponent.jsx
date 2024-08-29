import { useQuery } from "@tanstack/react-query";

//query function
const fetchPosts = async() =>{
    const response = await fetch(" https://jsonplaceholder.typicode.com/posts");

    if(!response){
        throw new Error("network response was not ok")
    }
    return response.json();
};


const PostComponent = () => {
    const {data , isLoading , error, isError , refetch} = useQuery({
        queryKey:["post"],
         queryFn: fetchPosts,
         cacheTime: 300000, // 5 minutes
            staleTime: 60000,  // 1 minute
            refetchOnWindowFocus: false, // Disable refetch on window focus
            keepPreviousData: true, // Keep previous data while fetching new data
    });

    if(isLoading){
        return<div>Loading...</div>;
    }

    if(isError){
        return<div>{error.message}</div>
    }



    return(
        <div>
       <h1>Posts</h1>

         <ul>
    {data.map(post =>(
        <li key={post.id}>{post.title}</li>))}
          </ul>

          <button onClick={()=> refetch()}>Refecth data</button>
        </div>
    )
}
export default PostComponent;