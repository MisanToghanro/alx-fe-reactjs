import {QueryClientProvider , QueryClient} from "@tanstack/react-query";
import PostComponent from "./PostsComponent";


function App() {
 const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PostComponent/>
    </QueryClientProvider>
  )
};

export default App
