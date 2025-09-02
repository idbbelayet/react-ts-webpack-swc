import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import FluentForm from './components/FluentForm';
const About = lazy(() => import('./pages/About'));
const IconExample = lazy(() => import('./pages/IconExample'));
import Theme from './fluentui/theme';
import { FluentProvider } from '@fluentui/react-components';

import { RootState } from './store/store';
import { useSelector } from 'react-redux';

export default function App() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <FluentProvider
      theme={mode === 'light' ? Theme.lightTheme : Theme.darkTheme}
      className="min-h-screen"
    >
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
    </FluentProvider>
  );
}
