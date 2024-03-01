import React from "react";
import { Footer, Loader, Navbar } from "../../components/";

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
																	100000 VND -
																	500000 VND
																</a>
															</li>
															<li>
																<a href="#">
																	500000 VND -
																	1000000 VND
																</a>
															</li>
															<li>
																<a href="#">
																	Above 1000000 VND
																</a>
															</li>
														</ul>
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
													High To Low
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
													<a href="/shop/dha">
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
