import { Outlet } from "react-router-dom";
import { DesktopHeader, MobileHeader } from "../components";
import { createContext, useContext, useEffect, useState } from "react";

const HomeLayoutContext = createContext();
const HomeLayout = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      name: "",
      email: "",
      password: "",
    }
  );
  const [ShowUserProfile, setShowUserProfile] = useState(false);
  useEffect(() => {
    // Function to update the user state when the custom event is triggered
    const handleUserUpdate = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    // Listen for the custom 'userUpdated' event
    window.addEventListener("userUpdated", handleUserUpdate);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("userUpdated", handleUserUpdate);
    };
  }, []);

  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("lang")) || "ENG"
  );
  // console.log("lang from homeLayout");
  return (
    <HomeLayoutContext.Provider
      value={{
        lang,
        setLang,
        user,
        setUser,
        ShowUserProfile,
        setShowUserProfile,
      }}
    >
      <DesktopHeader />
      <MobileHeader />
      <Outlet />
    </HomeLayoutContext.Provider>
  );
};
export const useHomeLayoutContext = () => {
  return useContext(HomeLayoutContext);
};
export default HomeLayout;
