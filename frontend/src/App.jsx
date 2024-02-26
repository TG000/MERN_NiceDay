import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/index.js";
import { Loader } from "./components/index.js";

function App() {
	return (
		<>
			<ToastContainer />
			<Loader />
			<Home />
			<main className="py-3">
				<Outlet />
			</main>
		</>
	);
}

export default App;
