import React, { useEffect } from 'react';

const HooksSimulateDidUpdate = ({ count }: { count: number }) => {
  useEffect(() => {
    console.log('mounted or updated');
  }, [count]);

  useEffect(() => {
    console.log('mounted or updated every re-render');
  });

  return (
    <div>
      <p>HooksSimulateDidUpdate</p>
      {/*<p>{count}</p>*/}
    </div>
  );
};

export default HooksSimulateDidUpdate;
