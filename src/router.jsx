import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { HomePage } from "./pages/Home";
import { DriftPage } from "./pages/Drift";
import { ForzaPage } from "./pages/Forza";
import { TimeAttackPage } from "./pages/TimeAttack";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "drift",
        element: <DriftPage />,
      },
      {
        path: "forza",
        element: <ForzaPage />,
      },
      {
        path: "timeattack",
        element: <TimeAttackPage />,
      },
    ],
  },
]);
