import React from "react";
import { Buffer } from "buffer";
window.Buffer = Buffer;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./05_utilities/utilities.css";

{
  /* -- Page imports -- */
}
import Home from "./04_pages/home/index";
// import Services from "./04_pages/services/index";
import CaseStudies from "./04_pages/case-studies/index";
import Articles from "./04_pages/articles/index";
import Services from "./04_pages/services/index";
import Tools from "./04_pages/tools/index";
import ThankYou from "./04_pages/tools/thank-you.tsx";
import Privacy from "./04_pages/privacy/index";

import Article_1 from "./04_pages/articles/article-1";
import Article_2 from "./04_pages/articles/article-2";
import Article_3 from "./04_pages/articles/article-3";
import Article_4 from "./04_pages/articles/article-4";
import Article_5 from "./04_pages/articles/article-5";
import Article_6 from "./04_pages/articles/article-6";
import Article_7 from "./04_pages/articles/article-7";
import Article_8 from "./04_pages/articles/article-8";
import Article_9 from "./04_pages/articles/article-9";
import Article_10 from "./04_pages/articles/article-10";
import Article_11 from "./04_pages/articles/article-11";
import Article_12 from "./04_pages/articles/article-12";
import Article_13 from "./04_pages/articles/article-13";
import Article_14 from "./04_pages/articles/article-14";

import { SchemeProvider } from "./02_components/SchemeProvider";

const App: React.FC = () => {
  return (
    <SchemeProvider scheme="dark">
      <Router>
        <Routes>
          {/* -- Page routes -- */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/premium-tools" element={<Tools />} />
          <Route path="/tools/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* -- Article routes -- */}
          <Route
            path="/designing-trust-for-emerging-technology"
            element={<Article_1 />}
          />
          <Route
            path="/trust-design-audit-what-it-does-and-why-it-matters"
            element={<Article_2 />}
          />
          <Route path="/article-3" element={<Article_3 />} />
          <Route path="/article-4" element={<Article_4 />} />
          <Route path="/article-5" element={<Article_5 />} />
          <Route path="/article-6" element={<Article_6 />} />
          <Route path="/article-7" element={<Article_7 />} />
          <Route path="/article-8" element={<Article_8 />} />
          <Route path="/article-9" element={<Article_9 />} />
          <Route path="/article-10" element={<Article_10 />} />
          <Route path="/article-11" element={<Article_11 />} />
          <Route path="/article-12" element={<Article_12 />} />
          <Route path="/article-13" element={<Article_13 />} />
          <Route path="/article-14" element={<Article_14 />} />
        </Routes>
      </Router>
    </SchemeProvider>
  );
};

export default App;
