import { Link } from 'react-router-dom';
import './App.css';
import Routers from './routers/routers';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Test Apps</h1>
        <nav className="nav">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/other">Other Page</Link>
        </nav>
      </header>
      <main  className="main">
        <Routers />
      </main>
      <footer className="footer"> Footer </footer>
    </div>
  );
}

export default App;
