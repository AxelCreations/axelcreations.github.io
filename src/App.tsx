import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Contacts from './pages/landing/Contacts';
import WorkExperience from './pages/landing/Experience';
import Hero from './pages/landing/Hero';
import Profile from './pages/landing/Profile';
import Skills from './pages/landing/Skills';
import MyWork from './pages/landing/Works';

const App = () => {
  document.title = 'Reynel Axel Perdomo';

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
