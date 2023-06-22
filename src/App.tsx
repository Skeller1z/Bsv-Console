import React, { useEffect, Suspense } from 'react';
import Router from './routes/routes';
import Loading from './components/Loading';


function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
      <Router/>
      </Suspense>
      
    </div>
  );
}

export default App;
