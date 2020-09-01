import React from 'react';
import './App.css';
import Sidebar from './components/Body/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Feeds from './components/Body/Feeds/Feeds'
import "./App.css"

// Components

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar />
        <Feeds />
      </div>
        
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
