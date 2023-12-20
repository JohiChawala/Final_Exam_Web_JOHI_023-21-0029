import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Section2 from './components/Section2';
import Future from './components/Future';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <Section2 />
      <Future />
      <Footer />
    </div>
  );
}

export default App;
