import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import LoggedIn from "../Components/LoggedIn";
import AdminPage from "../Components/AdminPage";
import LoginPage from "../Components/LoginPage";
import AdminLogin from "../Components/AdminLogin";
import Register from "../Components/Register";
import { AuthProvider } from "../context/AuthProvider";
import RequireAuth from "../Components/RequireAuth";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminlogin" element={<AdminLogin />} />

            {/* Protect the routes below */}
            <Route element={<RequireAuth />}>
              <Route path="/events" element={<LoggedIn />} />
              <Route path="/admin" element={<AdminPage />} />
            </Route>

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
