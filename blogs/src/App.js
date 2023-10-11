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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostData } from "./store/post-actions";
import { postActions } from "./store/post-slice";

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
  const dispatch = useDispatch();
  const refreshOnUpdate = useSelector((state) => state.post.updateStatus);

  useEffect(() => {
    if (refreshOnUpdate) {
      dispatch(fetchPostData());
    }
    dispatch(postActions.updatePost(false));
  }, [dispatch, refreshOnUpdate]);

  return <RouterProvider router={router} />;
}

export default App;
