import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
	Route,
	Router,
	RouterProvider,
	createRoutesFromElements,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Pages
import { Home, Login, Signup, Contact, About, Shop, Shop_Detail, Shopping_Cart } from "./pages/";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/About" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/shop" element={<Shop_Detail />} />
			<Route path="/shop_detail" element={<Signup />} />
			<Route path="/shop" element={<Shopping_Cart />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
