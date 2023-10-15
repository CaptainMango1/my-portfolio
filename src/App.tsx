import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomewView from "./common/views/HomeView";
import Navbar from "./common/components/Navbar";
import AboutMe from "./common/views/AboutMe";
import ProjectView from "./common/views/ProjectView";
import SkillsView from "./common/views/SkillsView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomewView />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectView />} />
          <Route path="/skills" element={<SkillsView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
