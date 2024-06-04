import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Contacts from './pages/landing/Contacts';
import WorkExperience from './pages/landing/WorkExperience';
import Hero from './pages/landing/Hero';
import Profile from './pages/landing/Profile';
import Skills from './pages/landing/Skills';
import MyWork from './pages/landing/MyWork';
import { useLayoutEffect, useState } from 'react';

const App = () => {
  const [hash, setHash] = useState('');

  document.title = 'Reynel Axel Perdomo - FullStack Developer';

  useLayoutEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);

      if (hash.length > 0) {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, [hash])

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
