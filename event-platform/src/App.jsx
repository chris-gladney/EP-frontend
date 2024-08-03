import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import Google from "../Components/Google";
import Events from "../Components/Events";
import LoggedIn from "../Components/LoggedIn";
import AdminPage from "../Components/AdminPage";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Google />} />
          <Route path="/events" element={<LoggedIn />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
