import logo from './logo.svg';
import Project from './routes/Project.jsx';
import Home from './routes/Home.jsx';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Tách ra 1 component để dùng hook
function AppContent() {
  const location = useLocation(); // ✅ lấy pathname từ react-router

  return (
    <div className="App">
      <Routes>
        <Route path="/Project" element={<Project />} />
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Nút quay lại: chỉ hiện nếu KHÔNG ở "/" */}
      {location.pathname !== "/" && (
        <div className="fixed top-4 left-4">
          <Link
            to="/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Quay lại
          </Link>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


