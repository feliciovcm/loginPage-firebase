import { Route, Routes } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './contexts/AuthContext';
import { GlobalStyle } from './globals.styles';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';

function App() {
  return (
    
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        } />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      
      <GlobalStyle/>
    </AuthProvider>
  );
}

export default App;
