import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
// @ts-ignore
import Reports from "portal/Reports";
import { lazy, Suspense } from "react";
import Header from "./components/Header";

const Marketplace = lazy(() => import("./pages/Marketplace"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard>
        <Suspense>
          <Marketplace />
        </Suspense>
      </Dashboard>
    ),
  },
  {
    path: "/reports",
    element: (
      <Dashboard>
        <Reports />
      </Dashboard>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
