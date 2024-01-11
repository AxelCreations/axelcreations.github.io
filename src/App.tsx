import Contacts from './components/layout/Contacts';
import WorkExperience from './components/layout/Experience';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Profile from './components/layout/Profile';
import Skills from './components/layout/Skills';
import MyWork from './components/layout/Works';

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
