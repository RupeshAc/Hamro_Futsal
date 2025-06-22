import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>Welcome to the Futsal Management System</p>
        {/* Your other page content */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
