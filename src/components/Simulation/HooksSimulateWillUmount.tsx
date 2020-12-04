import React, { useEffect } from 'react';

const HooksSimulateWillUmount = ({ count }: { count: number }) => {
  useEffect(() => {
    return () => {
      console.log('will unmount.');
    };
  }, []);

  return (
    <div>
      <p>HooksSimulateWillUnmount</p>
      {/*<p>{count}</p>*/}
    </div>
  );
};

export default HooksSimulateWillUmount;
