import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { GlobalStyle } from './globals.styles';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>

        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
