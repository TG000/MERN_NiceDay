import React from "react";
import { Footer, Loader, Navbar } from "../../components/";

function Post() {
	return (
		<>
			<Loader />

			<Navbar />
			{/**Blog Details Hero Begin */}
			<section className="blog-hero spad">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-lg-9 text-center">
							<div className="blog__hero__text">
								<h2>
									Are you one of the thousands of Iphone
									owners who has no idea
								</h2>
								<ul>
									<li>By Deercreative</li>
									<li>February 21, 2019</li>
									<li>8 Comments</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/**Blog Details Hero End */}

			{/**Blog Details Section Begin */}
			<section className="blog-details spad">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-lg-12">
							<div className="blog__details__pic">
								<img
									src="../src/assets/img/blog/details/blog-details.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="blog__details__content">
								<div className="blog__details__share">
									<span>share</span>
									<ul>
										<li>
											<a href="#">
												<i className="fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#" className="twitter">
												<i className="fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" className="youtube">
												<i className="fa fa-youtube-play"></i>
											</a>
										</li>
										<li>
											<a href="#" className="linkedin">
												<i className="fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>
								<div className="blog__details__text">
									<p>
										Hydroderm is the highly desired
										anti-aging cream on the block. This
										serum restricts the occurrence of early
										aging sings on the skin and keeps the
										skin younger, tighter and healthier. It
										reduces the wrinkles and loosening of
										skin. This cream nourishes the skin and
										brings back the glow that had lost in
										the run of hectic years.
									</p>
									<p>
										The most essential ingredient that makes
										hydroderm so effective is Vyo-Serum,
										which is a product of natural selected
										proteins. This concentrate works
										actively in bringing about the natural
										youthful glow of the skin. It tightens
										the skin along with its moisturizing
										effect on the skin. The other important
										ingredient, making hydroderm so
										effective is “marine collagen” which
										along with Vyo-Serum helps revitalize
										the skin.
									</p>
								
									<p>
										Vyo-Serum along with tightening the skin
										also reduces the fine lines indicating
										aging of skin. Problems like dark
										circles, puffiness, and crow’s feet can
										be control from the strong effects of
										this serum.
									</p>
									<p>
										Hydroderm is a multi-functional product
										that helps in reducing the cellulite and
										giving the body a toned shape, also
										helps in cleansing the skin from the
										root and not letting the pores clog,
										nevertheless also let’s sweeps out the
										wrinkles and all signs of aging from the
										sensitive near the eyes.
									</p>
								</div>
								<div className="blog__details__option">
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6">
											<div className="blog__details__author">
												<div className="blog__details__author__pic">
													<img
														src="../src/assets/img/about/langiacd.jpg"
														alt=""
													/>
												</div>
												<div className="blog__details__author__text">
													<h5>Admin</h5>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								<div className="blog__details__btns">
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6">
											<a
												href=""
												className="blog__details__btns__item"
											>
												<p>
													<span className="arrow_left"></span>{" "}
													Previous Pod
												</p>
												<h5>
													It S classNameified How To
													Utilize Free classNameified
													Ad Sites
												</h5>
											</a>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6">
											<a
												href=""
												className="blog__details__btns__item blog__details__btns__item--next"
											>
												<p>
													Next Pod{" "}
													<span className="arrow_right"></span>
												</p>
												<h5>
													Tips For Choosing The
													Perfect Gloss For Your Lips
												</h5>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/**Blog Details Section End */}
			<Footer />
		</>
	);
}

export default Post;
