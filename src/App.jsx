import GlobalStyle from './GlobalStyles';
import About from './sections/About';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Home from './sections/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App