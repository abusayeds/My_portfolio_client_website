import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./main/Main";

import Home from "./component/home/Home";
import ProjectDetails from "./component/projects/ProjectDetails";
import Blogs from "./pages/blogs/Blogs";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRouter from "./priveteRoute/PriveteRouter";
import Login from "./component/login/Login";
import BlogDetails from "./pages/blogs/BlogDetails";
import Updateblog from "./pages/blogs/Updateblog";
import UpdateProject from "./pages/createProject/UpdateProject";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/blog",
          element: <Blogs />,
        },
        {
          path: "/create-blog",
          element: <Blogs />,
        },
        {
          path: "/project-details/:projectId",
          element: <ProjectDetails />,
        },
        {
          path: "/blog-details/:blogId",
          element: <BlogDetails />,
        },
        {
          path: "/blog-update/:blogId",
          element: <Updateblog />,
        },
        {
          path: "/project-update/:ProjectId",
          element: <UpdateProject />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
