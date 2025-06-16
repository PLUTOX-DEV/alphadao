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
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    
    </BrowserRouter>
    </BlogProvider>
    
    
  );  
};

export default App;