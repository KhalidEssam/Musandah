import "./App.css";
import { VStack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Services } from "./pages/Services";
// import { Blogs } from "./pages/Blogs";
// import { Articles } from "./pages/Articles";
import { Contact } from "./pages/ContactUs.tsx";
import { About } from "./pages/AbostUs.tsx";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import { useLanguage } from './hooks/useLanguage.ts';
import { useEffect } from 'react';
// import { ViewAllArticles } from "./components/ViewAllArticles";
// import { KnowledgeCenter } from "./pages/KnowledgeCenter.tsx";
import useDirection from "./hooks/useDirection.ts";
import useFontFamily from "./hooks/useFontFamily";
// import BlogDetails from "./pages/BlogDetails";
// import ArticleDetails from "./pages/ArticleDetails";
// import { ViewAllBlogs } from "./components/ViewAllBlogs.tsx";
// import { TermsandConditions } from "./pages/TermsAndConditions";
// import { FrequentQuestions } from "./pages/FrequentQuestions.tsx";
// import TimedPopup from './components/SubscribeNow.tsx'
import { Toaster } from "./components/ui/toaster.tsx";



function App() {
  const { direction } = useLanguage();
  useDirection();

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);
  // useDynamicLangSwitch(); // activates automatic switching
  useFontFamily(); // dynamically switches fonts

  return (
    <VStack minH="100vh" gap={0}>
      <BrowserRouter>
        <Header />
        <main>
          {/* <TimedPopup /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/knowledge" element={<KnowledgeCenter />} /> */}
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogDetails />} /> */}
            {/* <Route path="/blogs/all-blogs" element={<ViewAllBlogs />} /> */}
            {/* <Route path="/articles" element={<Articles />} /> */}
            {/* <Route path="/articles/all-articles" element={<ViewAllArticles />} /> */}
            {/* <Route path="/article/:id" element={<ArticleDetails />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/terms-and-conditions" element={<TermsandConditions />} /> */}
            {/* <Route path="/faq" element={<FrequentQuestions />} />  */}
            {/* <Route path="/test" element={<TestComp/>} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </main>
        <Footer />
      </BrowserRouter>
    </VStack>
  );
}

export default App;