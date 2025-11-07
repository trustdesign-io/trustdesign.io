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
        </Routes>
      </Router>
    </SchemeProvider>
  );
};

export default App;
