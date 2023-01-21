// import { QueryClient, QueryClientProvider } from "react-query";
import AdviceBox from "./Approach 01/AdviceBox";
// import AdviceBox from "./Approach 02/components/AdviceBox";
const App = () => {
  // const client = new QueryClient();
  // The value which we will pass through QueryClientProvider is created with QueryClient.

  return (
    <div className="grid place-content-center h-screen bg-[#0c0f14]">
      <AdviceBox />
    </div>

    // Approach 01

    // <div className="grid place-content-center h-screen bg-[#0c0f14]">
    //   <QueryClientProvider client={client}>
    //     {/*  QueryClientProvider acts like React.ContextProvider. The value we pass in ContextAPI is called "client" here. */}
    //     <AdviceBox />
    //   </QueryClientProvider>
    // </div>

    //Approach 02
  );
};

export default App;
