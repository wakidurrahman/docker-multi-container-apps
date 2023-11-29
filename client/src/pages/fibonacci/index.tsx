import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MainContainer } from '../../components/template/main-container';
import './index.scss';

interface FibonacciProps {
  pageId?: string | undefined;
}

const Fibonacci: React.FC<FibonacciProps> = ({ pageId }) => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [error, setError] = useState<string>('');
  const [values, setValues] = useState<any>({});
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(inputValue);
    try {
      await axios.post('/api/values', {
        index: inputValue,
      });

      setInputValue('');
    } catch (error) {
      setError('404 (Not Found)');
    }
  };

  const renderSeenIndexes = () =>
    seenIndexes.map(({ number }) => number).join(', ');

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }

    return entries;
  };

  useEffect(() => {
    // Fetch Index from redis 
    const fetchIndexes = async () => {
      try {
        const values = await axios.get('/api/values/current');
        if (values) {
          setValues(values.data);
        }
      } catch (error) {
        setError('404 (Not Found)');
      }
    };
    
   // Fetch Values from postgres
    const fetchValues = async () => {
      try {
        const seenIndexes = await axios.get('/api/values/all');
        if (seenIndexes) {
          setSeenIndexes(seenIndexes.data);
        }
      } catch (error) {
        setError('404 (Not Found)');
      }
    };

    fetchIndexes();
    fetchValues();
  }, []);

  return (
    <MainContainer>
      <div className="fibonacci" id={pageId}>
        <h2>{error && error}</h2>
        <form onSubmit={handleSubmit}>
          <label>Enter your index:</label>
          <input
            type="number"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <h3>Indexes I have seen: </h3>
        {renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {renderValues()}
      </div>
    </MainContainer>
  );
};

export default Fibonacci;
