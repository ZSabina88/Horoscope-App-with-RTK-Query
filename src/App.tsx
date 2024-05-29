import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignCard from "./components/SignDailyCard";
import Buttons from "./components/Buttons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/sunsigns/:sign", element: <SignCard /> },

    ]
  }
])

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
