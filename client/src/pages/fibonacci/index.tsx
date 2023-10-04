import React from 'react';
import './index.css';

interface FibonacciProps {
  pageId?: string | undefined;
}
const Fibonacci: React.FC<FibonacciProps> = ({ pageId }) => {
  return <div id={pageId}>Fibonacci</div>;
};

export default Fibonacci;
