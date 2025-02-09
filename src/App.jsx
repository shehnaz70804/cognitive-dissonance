import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
            <h2>Welcome to NeuroHarmony</h2>
        </AuthProvider>
    );
};

export default App;