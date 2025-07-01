import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { BlogProvider } from "./blog/context/BlogContext.tsx";
import Blog from "./pages/Blog.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
<<<<<<< Updated upstream
import ContactUs from "./pages/contactus.tsx";
import PrivacyPolicy from "./pages/Privacypolicy.tsx";
//import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import { AuthProvider } from './context/AuthContext';
import Profile from "./pages/Profile.tsx";

=======
import Blog from "./pages/Blog.tsx";
import Services from "./pages/Services.tsx";  
import { BlogProvider } from "./blog/context/BlogContext.tsx";
import Profile from "./pages/Profile.tsx"; // Import Profile component
>>>>>>> Stashed changes


const App = () => {
  return (
    <AuthProvider>
   
    <BlogProvider>

    <BrowserRouter>
   
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
        <Route path="/contactus" element={<ContactUs />} /> 
        <Route path="/footer" element={<footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
<<<<<<< Updated upstream
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        
=======
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services " element={<Services/>} />
        <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
        <Route path="*" element={<Home />} /> {/* Fallback route */}

    

           
>>>>>>> Stashed changes
      </Routes>
    
    </BrowserRouter>
    </BlogProvider>
 
    </AuthProvider>
    
    
  );  
};

export default App;