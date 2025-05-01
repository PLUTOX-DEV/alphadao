import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/AboutUs";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
   
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus/>} />
        
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;