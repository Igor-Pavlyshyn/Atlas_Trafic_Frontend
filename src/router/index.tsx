import { createBrowserRouter } from "react-router-dom";
import SignIn from "../layouts/SignIn/index.tsx";
import App from "../App.tsx";
import SignUpFirst from "../layouts/SignUp/SignUpFirst/index.tsx";
import SignUpSecond from "../layouts/SignUp/SignUpSecond/index.tsx";
import SignUpThird from "../layouts/SignUp/SignUpThird/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUpFirst />,
  },
  {
    path: "/signUp/security",
    element: <SignUpSecond />,
  },
  {
    path: "/signUp/verify",
    element: <SignUpThird />,
  },
]);
