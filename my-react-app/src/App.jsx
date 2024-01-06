import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchServiceData } from "./store/service-actions";
import ServicesDetailPage from "./pages/ServicesDetail";
import Root from "./layout/Root";
import NewServicePage from "./pages/NewService";
import NotFoundPage from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/new-service',
        element: <NewServicePage />
      },
      {
        path: "/services/:id",
        element: <ServicesDetailPage />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
