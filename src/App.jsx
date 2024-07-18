import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesPage from "./routes";
import Nav from "./components/nav";

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <RoutesPage />
    </QueryClientProvider>
  );
}

export default App;
