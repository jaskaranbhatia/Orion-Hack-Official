import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>  
    );
}

export default App;
