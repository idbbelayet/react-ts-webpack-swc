import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import FluentForm from './components/FluentForm';
const About = lazy(() => import('./pages/About'));
const IconExample = lazy(() => import('./pages/IconExample'));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p className="p-6">Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/icons" element={<IconExample />} />
          <Route path="/form" element={<FluentForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
