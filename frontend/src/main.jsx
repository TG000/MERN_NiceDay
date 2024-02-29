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
import {
	Home,
	Login,
	Signup,
	Contact,
	About,
	Shop,
	Product,
	Cart,
	Blog,
	Post,
	Profile,
} from "./pages/";
import { UserRoute } from "./components/index.js";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			{/* Default */}
			<Route path="/" element={<Home />} />

			{/* Logged In */}
			<Route path="" element={<UserRoute />}>
				<Route path="/profile" element={<Profile />} />
			</Route>

			{/* Auth*/}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />

			{/* User */}
			<Route path="/cart" element={<Cart />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/shop/:id" element={<Product />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:id" element={<Post />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
