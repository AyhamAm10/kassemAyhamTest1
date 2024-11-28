import React, { useState }  from "react";
import Header from "./component/layout/Header";
import ContactUs from "./pages/ContactUs";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
// import DetailProdect from "./pages/ProductDetails";
import FAQs from "./pages/FAQs";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";  
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./component/layout/Footer";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import ProfileCompany from "./pages/ProfileCompany";
import ProfilePages from "./pages/ProfilePages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Conditions from "./pages/Conditions";
import Plan from "./pages/Plan";
import{ ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import DownLoadApp from "./pages/DownLoadApp";

const App: React.FC = () => {

  const queryClient = new QueryClient();
  const location = useLocation();
  const noFooterRoutes = ["/login" , "/register" , "/verification"];
  // const lang = localStorage.getItem("YJOZ_lang")
  const [lang , _setLang] = useState<string | null>(localStorage.getItem("YJOZ_lang"))
  

  return (
    <div dir={lang == "ar" ? "rtl" : "ltr"} className="overflow-hidden ">
         {!noFooterRoutes.includes(location.pathname) && <Header />}
      <QueryClientProvider client={queryClient}>
        <main className="bg-primery">
        <ReactNotifications />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/search" element={<Category />} />
            <Route path="/our_app" element={<DownLoadApp />} />
            {/* <Route path="/Product/:id" element={<DetailProdect />} /> */}
            <Route path="/FAQ`s" element={<FAQs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile/:id" element={<ProfileCompany />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Conditions" element={<Conditions />} />
            <Route path="/account/*" element={<ProfilePages />} />
            <Route path="/subscribe" element={<Plan />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/verification" element={<Verification />} /> 
          </Routes>
        </main>
      </QueryClientProvider>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
