import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IndoorWork from './pages/IndoorWork';
import OutdoorWork from './pages/OutdoorWork';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename="/ChoreAid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sisatyot" element={<IndoorWork />} />
        <Route path="/ulkotyot" element={<OutdoorWork />} />
        <Route path="/meista" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
