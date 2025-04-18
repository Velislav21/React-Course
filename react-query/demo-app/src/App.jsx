import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Posts } from "./Posts"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <h1>Blog Posts</h1>
                <Posts />
            </div>
            <ReactQueryDevtools buttonPosition="bottom-left" />
        </QueryClientProvider>
    )
}

export default App
