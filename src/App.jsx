import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { GlobalStyle } from './globals.styles';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';

function App() {
  return (
    
    <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      
      <GlobalStyle/>
    </AuthProvider>
  );
}

export default App;
