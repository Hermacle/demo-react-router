import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'; 
import Service from './components/Service';
import Profil from './components/profil';
import Navbar from './components/Navbar';
import Marketing from './components/Services/Marketing';
import Developpement from './components/Services/Developpement';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} >
          <Route path="/service/marketing" element={<Marketing />} />
          <Route path="/service/developpement" element={<Developpement />} />
        </Route>
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>

  )

}
export default App;
