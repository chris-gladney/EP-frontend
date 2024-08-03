import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../src/App";
import Account from "./Account";
const APIPORT = 5000;

const Header = () => {
  const { setUser } = useContext(UserContext);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:${APIPORT}/login/success`,
        { withCredentials: true }
      );
      console.log("response", response);
      setUser(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header>
      <ul className="header-list">
        <li className="header-item">Events</li>
        <li className="header-item">
          <p>Contact us</p>
        </li>
        <li className="header-item">
          <Account />
        </li>
      </ul>
    </header>
  );
};

export default Header;
