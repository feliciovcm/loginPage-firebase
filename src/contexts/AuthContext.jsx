/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = useCallback((email, password) => createUserWithEmailAndPassword(auth, email, password), []);

  const login = useCallback((email, password) => signInWithEmailAndPassword(auth, email, password), []);

  const logout = useCallback(() => signOut(auth), []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(() => ({
    currentUser,
    login,
    logout,
    signUp,
  }), [currentUser, login, logout, signUp]);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
