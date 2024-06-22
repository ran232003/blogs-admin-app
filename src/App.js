import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./global/NavigationBar";
import { Route, Routes } from "react-router-dom";
import ToastMessage from "./global/ToastMessage";
import HomePage from "./homepage/HomePage";
import About from "./pages/about/About";
import Auth from "./pages/auth/Auth";
import BlogsPage from "./pages/Blogs/BlogsPage";
import NotFound from "./pages/NotFound";
import PrivateDashboard from "./global/PrivateAuth";
import DashBoard from "./pages/dashboard/DashBoard";
import ProfilePage from "./pages/profile/ProfilePage";
import CommentsPage from "./pages/comments/CommentsPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogsPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}

        <Route path="/auth/:status" element={<Auth />} />
        <Route element={<PrivateDashboard />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastMessage />
    </div>
  );
}

export default App;
