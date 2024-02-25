import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
	return (
		<>
			<ToastContainer />
			<Login />
			<main className="py-3">
				<Outlet />
			</main>
		</>
	);
}

export default App;
