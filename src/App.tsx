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

import Article_1 from "./04_pages/articles/article-1";
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

          {/* -- Article routes -- */}
          <Route
            path="/designing-trust-for-emerging-technology"
            element={<Article_1 />}
          />
        </Routes>
      </Router>
    </SchemeProvider>
  );
};

export default App;
