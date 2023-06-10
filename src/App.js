import './App.css';
import BorderTriangle from './components/BorderTriangle';
import Cards from './components/Cards';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BorderTriangle />
      <Cards />
    </div>
  );
}

export default App;
