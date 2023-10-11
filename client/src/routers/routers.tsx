import { Route, Routes } from 'react-router-dom';

import Fibonacci from '../pages/fibonacci';
import Home from '../pages/home';
import Others from '../pages/others';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fibonacci" element={<Fibonacci />} />
      <Route path="/otherpage" element={<Others />} />
    </Routes>
  );
};

export default Routers;
