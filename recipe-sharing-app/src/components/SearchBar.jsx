import useRecipeStore from "./recipestore";

 const SearchBar = () => {
  
    const setSearchTerm = useRecipeStore(state=> state.state);

    return(
 
        <input 
        type="text"
        placeholder="search for  recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}/>
    )
}

