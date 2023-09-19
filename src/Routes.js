import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
        path:"/projects",
        element:<Projects/>
  }
]);

export default router;
