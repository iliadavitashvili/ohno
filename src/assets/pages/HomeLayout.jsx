import { Outlet } from "react-router-dom";
import { DesktopHeader, Footer, MobileHeader } from "../components";
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
    const handleUserUpdate = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    window.addEventListener("userUpdated", handleUserUpdate);

    return () => {
      window.removeEventListener("userUpdated", handleUserUpdate);
    };
  }, []);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("lang")) || "ENG"
  );

  return (
    <HomeLayoutContext.Provider
      value={{
        lang,
        setLang,
        user,
        setUser,
        ShowUserProfile,
        setShowUserProfile,
        isChatOpen,
        setIsChatOpen,
      }}
    >
      <DesktopHeader />
      <MobileHeader />
      <Outlet />
      <Footer />
    </HomeLayoutContext.Provider>
  );
};
export const useHomeLayoutContext = () => {
  return useContext(HomeLayoutContext);
};
export default HomeLayout;
