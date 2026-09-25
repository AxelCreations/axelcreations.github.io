import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Contacts from './pages/landing/Contacts';
import WorkExperience from './pages/landing/WorkExperience';
import Hero from './pages/landing/Hero';
import Profile from './pages/landing/Profile';
import Skills from './pages/landing/Skills';
import MyWork from './pages/landing/MyWork';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.title = 'Reynel Axel Perdomo - FullStack Developer';
    let timeoutId: number | undefined;

    const handleHashChange = () => {
      const hash = window.location.hash;
      const elementId = decodeURIComponent(hash.slice(1));

      if (elementId.length > 0) {
        const element = document.getElementById(elementId);

        if (element) {
          window.clearTimeout(timeoutId);
          timeoutId = window.setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 800);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Contacts />
      <WorkExperience />
      <Profile />
      <Skills />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
