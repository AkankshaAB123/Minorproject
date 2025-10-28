// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Import all pages
import HomePage from './pages/HomePage';
import ItemsListPage from './pages/ItemsListPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import UserDashboard from './pages/UserDashboard';
import NgoDashboard from './pages/NgoDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CreateItemPage from './pages/CreateItemPage'; // 1. Import the new page

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ padding: '0 2rem', flex: 1 }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/items" element={<ItemsListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/item/:itemId" element={<ItemDetailsPage />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute allowedRoles={['individual', 'ngo', 'admin']}>
                <UserDashboard />
              </ProtectedRoute>
            }/>
            <Route path="/ngo-dashboard" element={
              <ProtectedRoute allowedRoles={['ngo']}>
                <NgoDashboard />
              </ProtectedRoute>
            }/>
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }/>
            
            {/* 2. Add the new route for donating an item */}
            <Route path="/donate-item" element={
              <ProtectedRoute allowedRoles={['individual', 'ngo']}>
                <CreateItemPage />
              </ProtectedRoute>
            }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;