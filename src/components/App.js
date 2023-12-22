import './App.css';
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">

      <Navbar />

      <h1>Hallie's Holiday Shop</h1>

      <Outlet />

    </div>
  );
}

export default App;
