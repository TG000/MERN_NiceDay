import React from "react";
import { Footer, Loader, Navbar } from "../../../components/";

// Css import
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/elegant-icons.css";
import "../../../assets/css/font-awesome.min.css";
import "../../../assets/css/magnific-popup.css";
import "../../../assets/css/nice-select.css";
import "../../../assets/css/magnific-popup.css";
import "../../../assets/css/slicknav.min.css";
import "../../../assets/css/style.css";

// Js import
import "../../../assets/js/bootstrap.min.js";
import "../../../assets/js/main.js";

function Shop() {
	return (
		<>
			<Loader />

			<Navbar />
			{/** Breadcrumb Section Begin */}
			<section className="breadcrumb-option">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb__text">
								<h4>Shop</h4>
								<div className="breadcrumb__links">
									<a href="./index.html">Home</a>
									<span>Shop</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/** Breadcrumb Section End */}

			{/** Shop Section Begin */}
			<section className="shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="shop__sidebar">
								<div className="shop__sidebar__search">
									<form action="#">
										<input
											type="text"
											placeholder="Search..."
										/>
										<button type="submit">
											<span className="icon_search"></span>
										</button>
									</form>
								</div>
								<div className="shop__sidebar__accordion">
									<div
										className="accordion"
										id="accordionExample"
									>
										<div className="card">
											<div className="card-heading">
												<a
													data-toggle="collapse"
													data-target="#collapseOne"
												>
													Categories
												</a>
											</div>
											<div
												id="collapseOne"
												className="collapse show"
												data-parent="#accordionExample"
											>
												<div className="card-body">
													<div className="shop__sidebar__categories">
														<ul className="nice-scroll">
															<li>
																<a href="#">
																	Men (20)
																</a>
															</li>
															<li>
																<a href="#">
																	Women (20)
																</a>
															</li>
															<li>
																<a href="#">
																	Bags (20)
																</a>
															</li>
															<li>
																<a href="#">
																	Clothing
																	(20)
																</a>
															</li>
															<li>
																<a href="#">
																	Shoes (20)
																</a>
															</li>
															<li>
																<a href="#">
																	Accessories
																	(20)
																</a>
															</li>
															<li>
																<a href="#">
																	Kids (20)
																</a>
															</li>
															<li>
																<a href="#">
																	Kids (20)
																</a>
															</li>
															<li>
																<a href="#">
																	Kids (20)
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-heading">
												<a
													data-toggle="collapse"
													data-target="#collapseTwo"
												>
													Branding
												</a>
											</div>
											<div
												id="collapseTwo"
												className="collapse show"
												data-parent="#accordionExample"
											>
												<div className="card-body">
													<div className="shop__sidebar__brand">
														<ul>
															<li>
																<a href="#">
																	Louis
																	Vuitton
																</a>
															</li>
															<li>
																<a href="#">
																	Chanel
																</a>
															</li>
															<li>
																<a href="#">
																	Hermes
																</a>
															</li>
															<li>
																<a href="#">
																	Gucci
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-heading">
												<a
													data-toggle="collapse"
													data-target="#collapseThree"
												>
													Filter Price
												</a>
											</div>
											<div
												id="collapseThree"
												className="collapse show"
												data-parent="#accordionExample"
											>
												<div className="card-body">
													<div className="shop__sidebar__price">
														<ul>
															<li>
																<a href="#">
																	$0.00 -
																	$50.00
																</a>
															</li>
															<li>
																<a href="#">
																	$50.00 -
																	$100.00
																</a>
															</li>
															<li>
																<a href="#">
																	$100.00 -
																	$150.00
																</a>
															</li>
															<li>
																<a href="#">
																	$150.00 -
																	$200.00
																</a>
															</li>
															<li>
																<a href="#">
																	$200.00 -
																	$250.00
																</a>
															</li>
															<li>
																<a href="#">
																	250.00+
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-heading">
												<a
													data-toggle="collapse"
													data-target="#collapseFour"
												>
													Size
												</a>
											</div>
											<div
												id="collapseFour"
												className="collapse show"
												data-parent="#accordionExample"
											>
												<div className="card-body">
													<div className="shop__sidebar__size">
														<label for="xs">
															xs
															<input
																type="radio"
																id="xs"
															/>
														</label>
														<label for="sm">
															s
															<input
																type="radio"
																id="sm"
															/>
														</label>
														<label for="md">
															m
															<input
																type="radio"
																id="md"
															/>
														</label>
														<label for="xl">
															xl
															<input
																type="radio"
																id="xl"
															/>
														</label>
														<label for="2xl">
															2xl
															<input
																type="radio"
																id="2xl"
															/>
														</label>
														<label for="xxl">
															xxl
															<input
																type="radio"
																id="xxl"
															/>
														</label>
														<label for="3xl">
															3xl
															<input
																type="radio"
																id="3xl"
															/>
														</label>
														<label for="4xl">
															4xl
															<input
																type="radio"
																id="4xl"
															/>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-heading">
												<a
													data-toggle="collapse"
													data-target="#collapseFive"
												>
													Colors
												</a>
											</div>
											<div
												id="collapseFive"
												className="collapse show"
												data-parent="#accordionExample"
											>
												<div className="card-body">
													<div className="shop__sidebar__color">
														<label
															className="c-1"
															for="sp-1"
														>
															<input
																type="radio"
																id="sp-1"
															/>
														</label>
														<label
															className="c-2"
															for="sp-2"
														>
															<input
																type="radio"
																id="sp-2"
															/>
														</label>
														<label
															className="c-3"
															for="sp-3"
														>
															<input
																type="radio"
																id="sp-3"
															/>
														</label>
														<label
															className="c-4"
															for="sp-4"
														>
															<input
																type="radio"
																id="sp-4"
															/>
														</label>
														<label
															className="c-5"
															for="sp-5"
														>
															<input
																type="radio"
																id="sp-5"
															/>
														</label>
														<label
															className="c-6"
															for="sp-6"
														>
															<input
																type="radio"
																id="sp-6"
															/>
														</label>
														<label
															className="c-7"
															for="sp-7"
														>
															<input
																type="radio"
																id="sp-7"
															/>
														</label>
														<label
															className="c-8"
															for="sp-8"
														>
															<input
																type="radio"
																id="sp-8"
															/>
														</label>
														<label
															className="c-9"
															for="sp-9"
														>
															<input
																type="radio"
																id="sp-9"
															/>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-heading">
												<a
													data-toggle="collapse"
													data-target="#collapseSix"
												>
													Tags
												</a>
											</div>
											<div
												id="collapseSix"
												className="collapse show"
												data-parent="#accordionExample"
											>
												<div className="card-body">
													<div className="shop__sidebar__tags">
														<a href="#">Product</a>
														<a href="#">Bags</a>
														<a href="#">Shoes</a>
														<a href="#">Fashio</a>
														<a href="#">Clothing</a>
														<a href="#">Hats</a>
														<a href="#">
															Accessories
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							<div className="shop__product__option">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="shop__product__option__left">
											<p>Showing 1–12 of 126 results</p>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="shop__product__option__right">
											<p>Sort by Price:</p>
											<select>
												<option value="">
													Low To High
												</option>
												<option value="">
													$0 - $55
												</option>
												<option value="">
													$55 - $100
												</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-2.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Piqué Biker Jacket</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$67.24</h5>
											<div className="product__color__select">
												<label for="pc-4">
													<input
														type="radio"
														id="pc-4"
													/>
												</label>
												<label
													className="active black"
													for="pc-5"
												>
													<input
														type="radio"
														id="pc-5"
													/>
												</label>
												<label
													className="grey"
													for="pc-6"
												>
													<input
														type="radio"
														id="pc-6"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item sale">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-3.jpg",
											}}
										>
											<span className="label">Sale</span>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Multi-pocket Chest Bag</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$43.48</h5>
											<div className="product__color__select">
												<label for="pc-7">
													<input
														type="radio"
														id="pc-7"
													/>
												</label>
												<label
													className="active black"
													for="pc-8"
												>
													<input
														type="radio"
														id="pc-8"
													/>
												</label>
												<label
													className="grey"
													for="pc-9"
												>
													<input
														type="radio"
														id="pc-9"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-4.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Diagonal Textured Cap</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$60.9</h5>
											<div className="product__color__select">
												<label for="pc-10">
													<input
														type="radio"
														id="pc-10"
													/>
												</label>
												<label
													className="active black"
													for="pc-11"
												>
													<input
														type="radio"
														id="pc-11"
													/>
												</label>
												<label
													className="grey"
													for="pc-12"
												>
													<input
														type="radio"
														id="pc-12"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item sale">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-6.jpg",
											}}
										>
											<span className="label">Sale</span>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Ankle Boots</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$98.49</h5>
											<div className="product__color__select">
												<label for="pc-16">
													<input
														type="radio"
														id="pc-16"
													/>
												</label>
												<label
													className="active black"
													for="pc-17"
												>
													<input
														type="radio"
														id="pc-17"
													/>
												</label>
												<label
													className="grey"
													for="pc-18"
												>
													<input
														type="radio"
														id="pc-18"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-7.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>T-shirt Contrast Pocket</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$49.66</h5>
											<div className="product__color__select">
												<label for="pc-19">
													<input
														type="radio"
														id="pc-19"
													/>
												</label>
												<label
													className="active black"
													for="pc-20"
												>
													<input
														type="radio"
														id="pc-20"
													/>
												</label>
												<label
													className="grey"
													for="pc-21"
												>
													<input
														type="radio"
														id="pc-21"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-8.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Basic Flowing Scarf</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$26.28</h5>
											<div className="product__color__select">
												<label for="pc-22">
													<input
														type="radio"
														id="pc-22"
													/>
												</label>
												<label
													className="active black"
													for="pc-23"
												>
													<input
														type="radio"
														id="pc-23"
													/>
												</label>
												<label
													className="grey"
													for="pc-24"
												>
													<input
														type="radio"
														id="pc-24"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-9.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Piqué Biker Jacket</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$67.24</h5>
											<div className="product__color__select">
												<label for="pc-25">
													<input
														type="radio"
														id="pc-25"
													/>
												</label>
												<label
													className="active black"
													for="pc-26"
												>
													<input
														type="radio"
														id="pc-26"
													/>
												</label>
												<label
													className="grey"
													for="pc-27"
												>
													<input
														type="radio"
														id="pc-27"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item sale">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-10.jpg",
											}}
										>
											<span className="label">Sale</span>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Multi-pocket Chest Bag</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$43.48</h5>
											<div className="product__color__select">
												<label for="pc-28">
													<input
														type="radio"
														id="pc-28"
													/>
												</label>
												<label
													className="active black"
													for="pc-29"
												>
													<input
														type="radio"
														id="pc-29"
													/>
												</label>
												<label
													className="grey"
													for="pc-30"
												>
													<input
														type="radio"
														id="pc-30"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic"
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-11.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Diagonal Textured Cap</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$60.9</h5>
											<div className="product__color__select">
												<label for="pc-31">
													<input
														type="radio"
														id="pc-31"
													/>
												</label>
												<label
													className="active black"
													for="pc-32"
												>
													<input
														type="radio"
														id="pc-32"
													/>
												</label>
												<label
													className="grey"
													for="pc-33"
												>
													<input
														type="radio"
														id="pc-33"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item sale">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-12.jpg",
											}}
										>
											<span className="label">Sale</span>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Ankle Boots</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$98.49</h5>
											<div className="product__color__select">
												<label for="pc-34">
													<input
														type="radio"
														id="pc-34"
													/>
												</label>
												<label
													className="active black"
													for="pc-35"
												>
													<input
														type="radio"
														id="pc-35"
													/>
												</label>
												<label
													className="grey"
													for="pc-36"
												>
													<input
														type="radio"
														id="pc-36"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic "
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-13.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>T-shirt Contrast Pocket</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$49.66</h5>
											<div className="product__color__select">
												<label for="pc-37">
													<input
														type="radio"
														id="pc-37"
													/>
												</label>
												<label
													className="active black"
													for="pc-38"
												>
													<input
														type="radio"
														id="pc-38"
													/>
												</label>
												<label
													className="grey"
													for="pc-39"
												>
													<input
														type="radio"
														id="pc-39"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="product__item">
										<div
											className="product__item__pic"
											style={{
												backgroundImage:
													"url(src/assets/img/product/product-14.jpg",
											}}
										>
											<ul className="product__hover">
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/heart.png"
															alt=""
														/>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/compare.png"
															alt=""
														/>{" "}
														<span>Compare</span>
													</a>
												</li>
												<li>
													<a href="#">
														<img
															src="src/assets/img/icon/search.png"
															alt=""
														/>
													</a>
												</li>
											</ul>
										</div>
										<div className="product__item__text">
											<h6>Basic Flowing Scarf</h6>
											<a href="#" className="add-cart">
												+ Add To Cart
											</a>
											<div className="rating">
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
												<i className="fa fa-star-o"></i>
											</div>
											<h5>$26.28</h5>
											<div className="product__color__select">
												<label for="pc-40">
													<input
														type="radio"
														id="pc-40"
													/>
												</label>
												<label
													className="active black"
													for="pc-41"
												>
													<input
														type="radio"
														id="pc-41"
													/>
												</label>
												<label
													className="grey"
													for="pc-42"
												>
													<input
														type="radio"
														id="pc-42"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="product__pagination">
										<a className="active" href="#">
											1
										</a>
										<a href="#">2</a>
										<a href="#">3</a>
										<span>...</span>
										<a href="#">21</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/** Shop Section End */}
			<Footer />
		</>
	);
}

export default Shop;
