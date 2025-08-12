import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import AdminRoute from './components/common/AdminRoute';

const Home = lazy(() => import('./pages/Home'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));
const MenuManager = lazy(() => import('./pages/Admin/MenuManager'));
const Reservations = lazy(() => import('./pages/Admin/Reservations'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/admin" element={<AdminRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="menu" element={<MenuManager />} />
          <Route path="reservations" element={<Reservations />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;