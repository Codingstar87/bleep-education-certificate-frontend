import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Certificate from './pages/Certificate';
// import NavigationButton from './components/NavigationButton';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30 relative overflow-hidden">
        {/* <NavigationButton /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
