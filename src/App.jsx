import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'; 
import Service from './components/Service';
import Profil from './components/profil';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>

  )

}
export default App;
