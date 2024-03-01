import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Footer, Loader, Navbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useProfileMutation } from "../../redux/api/userApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";

const ChangePassword = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { userInfo } = useSelector((state) => state.auth);

	const [updateProfile, { isLoading: loadingUpdateProfile }] =
		useProfileMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();

		if (password != confirmPassword) {
			toast.error("Password and confirm password must match!");
		} else {
			try {
				const res = await updateProfile({
					_id: userInfo._id,
					password,
				}).unwrap();
				dispatch(setCredentials({ ...res }));
				navigate("/profile");
				toast.success("Profile updated successfully!");
			} catch (error) {
				toast.error(error?.data?.message || error.message);
			}
		}
	};

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
								<h4>Change Password</h4>
								<div className="breadcrumb__links">
									<a href="/">Home</a>
									<a href="/profile">Profile</a>
									<span>Change Password</span>
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
						<div className="card">
							<div className="card-body">
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
						<form className="card mb-3" onSubmit={submitHandler}>
							<div className="card-body mr-3">
								<div className="row">
									<div className="col-sm-3 d-flex align-items-center">
										<h6 className="mb-0">Password</h6>
									</div>
									<input
										type="password"
										placeholder="Enter password"
										className="input-field col-sm-9 py-1 border rounded"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3 d-flex align-items-center">
										<h6 className="mb-0">
											Confirm Password
										</h6>
									</div>
									<input
										type="password"
										placeholder="Confirm Password"
										className="input-field col-sm-9 py-1 border rounded"
										value={confirmPassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
										}
									/>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-12">
										<button
											type="submit"
											className="btn btn-info mr-3"
										>
											Update Information
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default ChangePassword;
