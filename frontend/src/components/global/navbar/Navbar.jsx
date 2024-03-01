import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../redux/api/userApiSlice";
import { logout } from "../../../redux/features/auth/authSlice";
import "./Navbar.css";

const Navbar = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const [searchOpen, setSearchOpen] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate("/login");
		} catch (error) {
			console.error(error);
		}
	};

	const searchOpenHandler = () => {
		$(".search-model").fadeIn(400);
	};

	const searchCloseHandler = () => {
		$(".search-model").fadeOut(400, function () {
			$("#search-input").val("");
		});
	};

	// $(".search-switch").on("click", function () {
	// 	$(".search-model").fadeIn(400);
	// });

	// $(".search-close-switch").on("click", function () {
	// 	$(".search-model").fadeOut(400, function () {
	// 		$("#search-input").val("");
	// 	});
	// });

	return (
		<>
			{/* Offcanvas Menu Begin */}
			<div className="offcanvas-menu-overlay"></div>
			<div className="offcanvas-menu-wrapper">
				<div className="offcanvas__option">
					{userInfo ? (
						<div className="offcanvas__links">
							<Link to="/profile">Profile</Link>
							<a href="#" onClick={logoutHandler}>
								Logout
							</a>
						</div>
					) : (
						<div className="offcanvas__links">
							<Link to="/login">Login</Link>
							<Link to="/signup">Signup</Link>
						</div>
					)}
				</div>
				<div className="offcanvas__nav__option">
					<a className="search-switch cursor-pointer">
						<img src="src/assets/img/icon/search.png" alt="" />
					</a>
					<a href="#">
						<img src="src/assets/img/icon/heart.png" alt="" />
					</a>
					<Link to="/cart">
						<img src="src/assets/img/icon/cart.png" alt="" />{" "}
						<span>0</span>
					</Link>
					<div className="price">$0.00</div>
				</div>
				<div id="mobile-menu-wrap"></div>
				<div className="offcanvas__text">
					<p>Free shipping, 30-day return or refund guarantee.</p>
				</div>
			</div>
			{/* Offcanvas Menu End */}

			{/* Header Section Begin */}
			<header className="header">
				<div className="header__top">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-7">
								<div className="header__top__left">
									<p>
										Free shipping, 30-day return or refund
										guarantee.
									</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-5">
								<div className="header__top__right">
									{userInfo ? (
										<div className="header__top__links">
											<Link to="/profile">Profile</Link>
											<a href="#" onClick={logoutHandler}>
												Logout
											</a>
										</div>
									) : (
										<div className="header__top__links">
											<Link to="/login">Login</Link>
											<Link to="/signup">Signup</Link>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<div className="header__logo">
								<a href="./index.html">
									<img
										src="src/assets/img/logo_black.png"
										alt=""
									/>
								</a>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<nav className="header__menu mobile-menu">
								<ul>
									<li
										className={
											location.pathname === "/"
												? "active"
												: ""
										}
									>
										<a href="/">Home</a>
									</li>
									<li
										className={
											location.pathname === "/about"
												? "active"
												: ""
										}
									>
										<a href="/about">About</a>
									</li>
									<li
										className={
											location.pathname.includes("/shop")
												? "active"
												: ""
										}
									>
										<a href="/shop">Shop</a>
										<ul className="dropdown">
											<li>
												<a href="./about.html">Women</a>
											</li>
											<li>
												<a href="./shop-details.html">
													Men
												</a>
											</li>
											<li>
												<a href="./shopping-cart.html">
													Mix
												</a>
											</li>
											<li>
												<a href="./checkout.html">
													Accessories
												</a>
											</li>
										</ul>
									</li>
									<li
										className={
											location.pathname.includes("/blog")
												? "active"
												: ""
										}
									>
										<a href="/blog">Blog</a>
									</li>
									<li
										className={
											location.pathname === "/contact"
												? "active"
												: ""
										}
									>
										<a href="/contact">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="header__nav__option">
								<a
									className="search-switch"
									style={{ cursor: "pointer" }}
									onClick={searchOpenHandler}
								>
									<img
										src="src/assets/img/icon/search.png"
										alt=""
									/>
								</a>
								<a href="#">
									<img
										src="src/assets/img/icon/heart.png"
										alt=""
									/>
								</a>
								<Link to="/cart">
									<img
										src="src/assets/img/icon/cart.png"
										alt=""
									/>
								</Link>
								<div className="price">0.00₫</div>
							</div>
						</div>
					</div>
					<div className="canvas__open">
						<i className="fa fa-bars"></i>
					</div>
				</div>
			</header>
			{/* Header Section End */}

			{/* Search Begin */}
			<div className="search-model">
				<div className="h-100 d-flex align-items-center justify-content-center">
					<div
						className="search-close-switch"
						onClick={searchCloseHandler}
					>
						+
					</div>
					<form className="search-model-form">
						<input
							type="text"
							id="search-input"
							placeholder="Search here....."
						/>
					</form>
				</div>
			</div>
			{/* Search End */}
		</>
	);
};

export default Navbar;
