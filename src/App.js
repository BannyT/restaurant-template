import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './firebase/auth';
import AppRoutes from './routes';
import Layout from './components/common/Layout';
import './assets/styles/main.scss';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;