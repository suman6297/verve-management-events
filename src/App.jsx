import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import ProptechSummit from './pages/ProptechSummit';
import './App.css';
import BankSummit from './components/Common/BankSummit';
import WomenLeadersSummit from './pages/WomenLeadersSummit';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/proptech-summit" element={<ProptechSummit />} />
              <Route path="/events/bank-summit" element={<BankSummit />} /> 
<Route path="/events/women-leaders-summit" element={<WomenLeadersSummit />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;