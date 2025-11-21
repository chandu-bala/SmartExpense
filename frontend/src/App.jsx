import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />

          <Route path="/expenses" element={
            <ProtectedRoute><Expenses /></ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
