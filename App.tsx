import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Support } from './pages/Support';
import { Contact } from './pages/Contact';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('HOME');

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Home onChangeView={setCurrentView} />;
      case 'ABOUT':
        return <About />;
      case 'PRODUCTS':
        return <Products />;
      case 'SUPPORT':
        return <Support />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onChangeView={setCurrentView} />
    </div>
  );
};

export default App;