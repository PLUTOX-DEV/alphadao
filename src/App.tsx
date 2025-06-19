import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/About";
import Home from "./pages/Home";
import { BlogProvider } from "./blog/context/BlogContext.tsx";
import Blog from "./pages/Blog.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import ContactUs from "./pages/contactus.tsx";



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
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blog" element={<Blog/>} />
       
       
     </Routes>
    
    </BrowserRouter>
    </BlogProvider>
    
    
  );  
};

export default App;