import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<RouterProvider router={router} />
	// </React.StrictMode>
);
