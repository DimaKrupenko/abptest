import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const DecodeVin = lazy(() => import('../pages/DecodeVin/DecodeVin'));
const ExtendedDescriptions = lazy(() => import('../pages/ExtendedDescriptions/ExtendedDescriptions'));

const App = () => {
  return (
    <div className="App">
      {/* <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Variables">DecodeVin</Link>
        </nav>
      </header> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="variables" element={<DecodeVin />}>
            <Route
              path="variables/:variableId"
              element={<ExtendedDescriptions />}
            />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
