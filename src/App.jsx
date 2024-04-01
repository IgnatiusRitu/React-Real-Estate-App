import {
  createBrowserRouter,
  Route,
  Link,
  RouterProvider,
} from "react-router-dom";

import Layout from "./routes/layout/Layout";
import Homepage from "./routes/homepage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
