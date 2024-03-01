import React from "react";
import { Footer, Loader, Navbar } from "../../components/";

function Contact() {
	return (
		<>
			<Loader />

			<Navbar />
			
			{/* Map Begin */}
			<div className="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.443661489921!2d106.62525347480609!3d10.853821089299668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1709285308734!5m2!1svi!2s" height="500"
					style={{ border: 0 }}
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			
			{/* Map End */}

			{/* Contact Section Begin */}
			<section className="contact spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="contact__text">
								<div className="section-title">
									<span>Information</span>
									<h2>Contact Us</h2>
									<p>
									Connect with us easily! Visit our Contact Us page for inquiries, feedback, or assistance. We're here to help and listen
									</p>
								</div>
								<ul>
									<li>
										<h4>Vietnam</h4>
										<p>
										Công viên phần mềm Quang QTSC Building 1, Trung, P Q.11, Thành phố Hồ Chí Minh, Việt Nam<br />
											+84 0704-636-507
										</p>
									</li>
									<li>
										<p>
										Công Viên Phần Mềm Quang Trung, Lô 46, Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh, Việt Nam{" "}
											<br />
											+84 0913-123-445
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="contact__form">
								<form action="#">
									<div className="row">
										<div className="col-lg-6">
											<input
												type="text"
												placeholder="Name"
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="text"
												placeholder="Email"
											/>
										</div>
										<div className="col-lg-12">
											<textarea placeholder="Message"></textarea>
											<button
												type="submit"
												className="site-btn"
											>
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Contact Section End */}
			<Footer />
		</>
	);
}

export default Contact;
