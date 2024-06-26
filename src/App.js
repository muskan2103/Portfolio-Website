import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Desktop from './components/Desktop';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a loading time of 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return <div className="App">{loading ? <Loading /> : <Desktop />}</div>;
};

export default App;
