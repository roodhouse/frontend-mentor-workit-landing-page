import './App.css';
import BorderTriangle from './components/BorderTriangle';
import Cards from './components/Cards';
import Header from './components/Header';
import Hero from './components/Hero';
import BorderTriangleTwo from './components/BorderTriangleTwo'
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BorderTriangle />
      <Cards />
      <BorderTriangleTwo />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
