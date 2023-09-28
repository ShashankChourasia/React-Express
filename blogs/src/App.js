import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import BlogsPage from './pages/Blogs';
import BlogDetailPage from './pages/BlogDetail';
import EditBlogPage from './pages/Editblog';

const router= createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'blogs',
        // element: <BlogsPage />,
        children: [
          {
            index: true,
            element: <BlogsPage />
          },
          {
            path: ':blogId', 
            children: [
              {
                index: true,
                element: <BlogDetailPage />,
              },
              {
                path: 'edit',
                element: <EditBlogPage />
              }
            ]
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
