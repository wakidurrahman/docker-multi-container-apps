import { Route, Routes } from 'react-router-dom';

import Fibonacci from '../pages/fibonacci';
import Others from '../pages/others';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Fibonacci />} />
      <Route path="/other" element={<Others />} />
    </Routes>
  );
};

export default Routers;
