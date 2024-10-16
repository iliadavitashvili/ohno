import { useState } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  HomeLayout,
  ConfirmPassword,
  RecoveryPassword,
  Register,
  Login,
  Contact,
} from "./assets/pages";
import { action as registerAction } from "./assets/pages/Register";
import { action as loginAction } from "./assets/pages/Login";
import { action as confirmPasswordAction } from "./assets/pages/ConfirmPassword";

import { DesktopHeader, HomeContainer } from "./assets/components";
import ErrorEl from "./assets/components/ErrorEl";

// import Contact from "./assets/pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorEl />,

      children: [
        { index: true, element: <HomeContainer /> },
        { path: "/register", element: <Register />, action: registerAction },
        { path: "/login", element: <Login />, action: loginAction },
        { path: "/recovery-password", element: <RecoveryPassword /> },
        {
          path: "/confirm-password",
          element: <ConfirmPassword />,
          action: confirmPasswordAction,
        },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
