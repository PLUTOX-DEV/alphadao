import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import { BlogProvider } from "./blog/context/BlogContext.tsx";
import Blog from "./pages/Blog.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import ContactUs from "./pages/contactus.tsx";

import PrivacyPolicy from "./pages/Privacypolicy";
import Governance from "./pages/Governance";
import Footer from "./component/footer";
import Dashboard from "./component/dashboard.tsx";

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
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard user={{
            name: "",
            email: ""
          }} onLogout={function (): void {
            throw new Error("Function not implemented.");
          } } />} />

        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
};

export default App;
