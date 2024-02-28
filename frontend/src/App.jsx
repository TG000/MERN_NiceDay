import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/";
import { Loader } from "./components/";
function App() {
	return (
		<>
			<ToastContainer />
			<Loader />
			<Home />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
