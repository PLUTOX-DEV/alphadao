import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacypolicy";  
import ContactUs from "./pages/contactus";
import Governance from "./pages/Governance";
import Footer from "./component/footer";
import About from "./pages/About.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Blog from "./pages/Blog.tsx";
import Services from "./pages/Services.tsx";  
import { BlogProvider } from "./blog/context/BlogContext.tsx";


const App = () => {
  return (
    <BlogProvider>
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
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services " element={<Services/>} />


           
      </Routes>
    
    </BrowserRouter>
    </BlogProvider>
    
  );  
};

export default App;