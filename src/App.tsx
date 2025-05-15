import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacypolicy";  
import ContactUs from "./pages/contactus";
import Governance from "./pages/Governance";
import Footer from "./component/footer";
import About from "./pages/Aboutft";
import SignIn from "./pages/SignIn.tsx";
import SignUP from "./pages/SignUp.tsx";

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
        <Route path="/sign-in" element={<SignIn />} />
         <Route path="/sign-up" element={<SignUP/>} />


           
      </Routes>
    
    </BrowserRouter>
  );  
};

export default App;