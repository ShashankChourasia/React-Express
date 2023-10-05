import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import BlogDetailPage from "./pages/BlogDetail";
import EditBlogPage from "./pages/Editblog";
import NewBlogPage from "./pages/NewBlog";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blogs",
        // element: <BlogsPage />,
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
            path: 'new',
            element: <NewBlogPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
