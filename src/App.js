import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {

  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id/:num" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />
        {/* path 는 경로 element 는 보여줄 페이지 */}
      </Routes>

    </div>
  );
}

export default App;
