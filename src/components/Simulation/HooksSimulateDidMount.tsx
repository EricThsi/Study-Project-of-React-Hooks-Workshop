import React, { useEffect } from 'react';

const HooksSimulateDidMount = ({ count }: { count: number }) => {
  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <div>
      <p>HooksSimulateDidMount</p>
      <p>{count}</p>
    </div>
  );
};

export default HooksSimulateDidMount;
