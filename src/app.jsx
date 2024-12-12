import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DateNight from './components/DateNight';
import Functions from './components/Functions';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dateNight" element={<DateNight />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
