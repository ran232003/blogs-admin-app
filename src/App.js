import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./global/NavigationBar";
import { Route, Routes } from "react-router-dom";
import ToastMessage from "./global/ToastMessage";
import HomePage from "./homepage/HomePage";
import About from "./pages/about/About";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/:status" element={<Auth />} />
      </Routes>
      <ToastMessage />
    </div>
  );
}

export default App;
