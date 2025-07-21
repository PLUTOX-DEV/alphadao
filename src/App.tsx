import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import About from "./pages/About";
import Home from "./pages/Home";
import { BlogProvider } from "./blog/context/BlogContext";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/contactus";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/Privacypolicy";
import Governance from "./pages/Governance";

const App = () => {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/governance" element={<Governance />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
};

export default App;
