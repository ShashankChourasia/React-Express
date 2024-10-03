import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/Users";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
