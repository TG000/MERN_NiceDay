import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import Home from "./pages/auth/Home";

function App() {
	return (
		<>
			<ToastContainer />
			<Home />
			<main className="py-3">
				<Outlet />
			</main>
		</>
	);
}

export default App;
