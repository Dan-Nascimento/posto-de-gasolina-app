import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './components/pages/layout/Container';
import Navbar from './components/pages/layout/Navbar';
import Footer from './components/pages/layout/Footer';
import Projects from './components/pages/Projects';
import ProjectForm from './components/pages/Project/ProjectForm';
import AdminDashboard from './components/pages/AdminDashboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projectform" element={<ProjectForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;


