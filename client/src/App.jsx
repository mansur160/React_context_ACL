import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard.jsx';
// Import AuthProvider
import { AuthProvider } from './context/AuthContext.jsx';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

function ProtectedRoute({ element }) {
    const { state } = useContext(AuthContext);

    // If not authenticated, redirect to the login page
    if (!state.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If authenticated, render the given component
    return element;
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Main Layout */}
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
                    </Route>

                     {/*Auth Layout (if you uncomment) */}
                     <Route element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                     </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
