import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects/Projects";
import SingleProject from "./components/Projects/SingleProject/SingleProject";
import AddProject from "./components/Projects/AddProject/AddProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/projects/:id",
    element: <SingleProject />,
  },

  {
    path : "/AddProject",
    element:<AddProject/>
  }
]);

export default router;
