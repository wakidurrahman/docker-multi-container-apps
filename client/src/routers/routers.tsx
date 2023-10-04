import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Fibonacci from '../pages/fibonacci';
import Other from '../pages/others';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Fibonacci />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;