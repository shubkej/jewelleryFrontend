import "../src/App.css";
import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";

const App = () => {
  
  return (
    <>
      <Router />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
