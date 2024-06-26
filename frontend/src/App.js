// App.js
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop'; // Assuming Shop is your existing page
import Store from './pages/Store'; // Import Store component
import Pricing from './pages/Pricing'; // Import Store component
import LoginSignup from './pages/LoginSignup'; // Import Store component

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/store" element={<Store />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/loginsignup" element={<LoginSignup />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
