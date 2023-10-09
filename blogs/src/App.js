import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import BlogDetailPage from "./pages/BlogDetail";
import EditBlogPage from "./pages/Editblog";
import NewBlogPage from "./pages/NewBlog";
import ErrorPage from "./pages/Error";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { tokenLoader } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <BlogsPage />,
          },
          {
            path: ":blogId",
            children: [
              {
                index: true,
                element: <BlogDetailPage />,
              },
              {
                path: "edit",
                element: <EditBlogPage />,
              },
            ],
          },
          {
            path: "new",
            element: <NewBlogPage />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
