import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacypolicy";  
import ContactUs from "./pages/ContactUs";
import Governance from "./pages/Governance";
import Footer from "./component/Footer";
import About from "./pages/Aboutft";



const App = () => {
  return (
    <BrowserRouter>
   
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
        <Route path="/contactus" element={<ContactUs />} /> 
        <Route path="/governance" element={<Governance />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/about" element={<About />} />

           
      </Routes>
    
    </BrowserRouter>
  );  
};

export default App;