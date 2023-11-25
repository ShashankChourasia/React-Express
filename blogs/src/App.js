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
import { checkAuthLoader, tokenLoader } from "./util/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPostData } from "./store/post-actions";
import { action as logoutAction } from "./pages/Logout";

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
                loader: checkAuthLoader
              },
            ],
          },
          {
            path: "new",
            element: <NewBlogPage />,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
