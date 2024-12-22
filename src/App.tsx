import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Button } from "./components/ui/button";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        {window.location.pathname !== "/home" && (
          <div className="flex items-center justify-center gap-4 p-4">
            <Button onClick={() => window.location.replace("/login")}>Login</Button>
            <Button onClick={() => window.location.replace("/signup")}>Signup</Button>
          </div>
        )}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
