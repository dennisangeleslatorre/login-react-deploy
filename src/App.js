import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <Routes>
                  <Route path="/login" element={<LoginPage/>} />
              </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
