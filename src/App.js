import React from "react";
import { AuthProvider } from '@reshuffle/react-auth';
import Layout from './components/Layout';

const App = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

export default App;
