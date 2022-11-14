import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.scss";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import { Locations } from "../pages/Locations/Locations";
import { Episodes } from "../pages/Episodes/Episodes";

//Config Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "episodes",
        element: <Episodes />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
