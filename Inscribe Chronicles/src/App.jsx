import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './LandingPage';
import PrivateRoute from './componant/PrivateRoute';
import AuthenticatedLayout from './componant/AuthenticateLayout';
import SingleBlogCard from './componant/SingleBlogCard';
import BlogCard from './componant/BlogCard';
import Navbar from './componant/Navbar';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Route for Landing Page (unauthenticated users) */}
          <Route path="/" element={<LandingPage />} />

          {/* Protected Route (Home, Navbar visible only for authenticated users) */}
          <Route
            path="/home"
            element={
              
                  <SingleBlogCard />
                 
            }
          />
          <Route
            path="/blog"
            element={
              <BlogCard />
            } 
          />
        

        </Routes>
      </BrowserRouter>
  );
}

export default App;
