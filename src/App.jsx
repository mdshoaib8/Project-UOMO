import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import RootLayout from "./components/ui/RootLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}
