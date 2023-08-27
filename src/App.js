import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import PagenotFound from './Pages/PagenotFound/PagenotFound';

function App() {
  return (
    <div className="AppContainer">
      <Sidebar />
      <div className="mainWrapper">
        <Header />
        <div className="PagesWrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PagenotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
