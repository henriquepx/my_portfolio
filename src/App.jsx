import GlobalStyle from './GlobalStyles';
import About from './sections/About';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Profile />
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
 