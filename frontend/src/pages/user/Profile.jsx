import React, { useEffect } from "react";
import "./Profile.css";
import { Footer, Loader, Navbar } from "../../components";
import { useSelector } from "react-redux";
import { toPhoneNumber } from "../../utils";
const Profile = () => {
	const { userInfo } = useSelector((state) => state.auth);

	return (
		<>
			<Loader />

			<Navbar />

			{/**Breadcrumb Section Begin */}
			<section className="breadcrumb-option">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb__text">
								<h4>Profile</h4>
								<div className="breadcrumb__links">
									<a href="/">Home</a>
									<span>Profile</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/**Breadcrumb Section End */}

			<div className="main-body">
				<div className="container d-flex">
					<div className="col-md-4">
						<div className="profile-card">
							<div className="profile-card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img
										src="https://bootdey.com/img/Content/avatar/avatar7.png"
										alt="Admin"
										className="rounded-circle"
										width="150"
									/>
									<div className="mt-3">
										<h4>{userInfo.full_name}</h4>
										<p className="text-secondary mt-1 mb-2">
											{userInfo.isAdmin
												? "Admin"
												: "User"}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="profile-card mb-3">
							<div className="profile-card-body">
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Full Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{userInfo.full_name}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{userInfo.email}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Password</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										••••••••
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Phone</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{toPhoneNumber(userInfo.phone_number)}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-12">
										<a
											className="btn btn-info mr-3"
											href="/edit-profile"
										>
											Edit Information
										</a>
										<a
											className="btn btn-danger mr-3"
											href="/change-password"
										>
											Change Password
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row gutters-sm">
							<div className="col-sm-6 mb-3">
								<div className="profile-card h-100">
									<div className="profile-card-body">
										<h6 className="d-flex align-items-center mb-3">
											Account status:
											<i className="material-icons text-info ml-2">
												Protected
											</i>
										</h6>
										<small>Password</small>
										<div
											className="progress mb-3"
											style={{ height: "5px" }}
										>
											<div
												className="progress-bar bg-primary"
												role="progressbar"
												style={{ width: "80%" }}
												aria-valuenow="80"
												aria-valuemin="0"
												aria-valuemax="100"
											></div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 mb-3">
								<div className="profile-card h-100">
									<div className="profile-card-body">
										<h6 className="d-flex align-items-center mb-3">
											Order status:
											<span className="material-icons text-danger ml-2">
												Not order
											</span>
										</h6>
										<small>Current Order</small>
										<div
											className="progress mb-3"
											style={{ height: "5px" }}
										>
											<div
												className="progress-bar bg-primary"
												role="progressbar"
												style={{ width: "0%" }}
												aria-valuenow="0"
												aria-valuemin="0"
												aria-valuemax="100"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Profile;
