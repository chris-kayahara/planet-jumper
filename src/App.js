import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import PlanetPage from './components/PlanetPage/PlanetPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:planet" element={<PlanetPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
