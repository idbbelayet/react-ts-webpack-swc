import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import FluentForm from './components/FluentForm';
const About = lazy(() => import('./pages/About'));
const IconExample = lazy(() => import('./pages/IconExample'));
import myTheme from './fluentui/theme';
import { ThemeProvider } from '@fluentui/react';
initializeIcons();
export default function App() {
  return (
    <ThemeProvider applyTo="body" theme={myTheme}>
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
    </ThemeProvider>
  );
}
