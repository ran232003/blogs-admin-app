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
import CreatePost from "./pages/createPost/CreatePost";
import PostPage from "./pages/postPage/PostPage";
import { useEffect } from "react";
import { apiCall } from "./apiCall";
import { GET_USER_URL } from "./URLS";
import { useDispatch } from "react-redux";
import { userAction } from "./store/userSlice";
import Loading from "./global/LoadingSpinners";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    const data = await apiCall("GET", GET_USER_URL);
    console.log(data);
    if (data.status === "ok") {
      dispatch(userAction.setUser(data.data));
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/posts/:postTitle" element={<PostPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}

        <Route path="/auth/:status" element={<Auth />} />
        <Route element={<PrivateDashboard />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastMessage />
      <Loading />
    </div>
  );
}

export default App;
