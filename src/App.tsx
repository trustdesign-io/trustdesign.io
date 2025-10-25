import React from "react";
import { Buffer } from "buffer";
window.Buffer = Buffer;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./05_utilities/utilities.css";

{
  /* -- Page imports -- */
}
import Home from "./04_pages/home/index";
import Services from "./04_pages/services/index";
import CaseStudies from "./04_pages/case-studies/index";
import Tools from "./04_pages/tools/index";
import About from "./04_pages/about/index";

import Article_1 from "./04_pages/articles/article-1";
import Article_2 from "./04_pages/articles/article-2";
import Article_3 from "./04_pages/articles/article-3";
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
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />

          {/* -- Article routes -- */}
          <Route
            path="/recognising-parallels-in-hri-and-design-technology"
            element={<Article_1 />}
          />
          <Route
            path="/is-ai-your-friend-or-foe-exploring-generational-perspectives"
            element={<Article_2 />}
          />
          <Route
            path="/humanoid-robots-addressing-deep-human-problems"
            element={<Article_3 />}
          />
        </Routes>
      </Router>
    </SchemeProvider>
  );
};

export default App;
