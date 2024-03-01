import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Footer, Loader, Navbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useProfileMutation } from "../../redux/api/userApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";

const EditProfile = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const [canUpdate, setCanUpdate] = useState(false);

	const { userInfo } = useSelector((state) => state.auth);

	const [updateProfile, { isLoading: loadingUpdateProfile }] =
		useProfileMutation();

	useEffect(() => {
		if (userInfo) {
			setUsername(userInfo.full_name);
			setEmail(userInfo.email);
			setPhoneNumber(userInfo.phone_number);
		}
	}, [userInfo]);

	useEffect(() => {
		let check1 = username == userInfo.full_name;
		let check2 = email == userInfo.email;
		let check3 = phoneNumber == userInfo.phone_number;

		console.log(!(check1 && check2 && check3));

		setCanUpdate(!(check1 && check2 && check3));
	}, [username, email, phoneNumber]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const res = await updateProfile({
				_id: userInfo._id,
				full_name: username,
				email,
				phone_number: phoneNumber,
			}).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate("/profile");
			toast.success("Profile updated successfully!");
		} catch (error) {
			toast.error(error?.data?.message || error.message);
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
								<h4>Edit Profile</h4>
								<div className="breadcrumb__links">
									<a href="/">Home</a>
									<a href="/profile">Profile</a>
									<span>Edit Profile</span>
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
										<h6 className="mb-0">Full Name</h6>
									</div>
									<input
										type="text"
										placeholder="Full Name"
										className="input-field col-sm-9 py-1 border rounded"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
									/>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3 d-flex align-items-center">
										<h6 className="mb-0">Email</h6>
									</div>
									<input
										type="email"
										placeholder="Email"
										className="input-field col-sm-9 py-1 border rounded"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3 d-flex align-items-center">
										<h6 className="mb-0">Phone</h6>
									</div>
									<input
										type="text"
										placeholder="Phone"
										className="input-field col-sm-9 py-1 border rounded"
										value={phoneNumber}
										onChange={(e) =>
											setPhoneNumber(e.target.value)
										}
									/>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-12">
										<button
											type="submit"
											className="btn btn-info mr-3"
											disabled={canUpdate ? false : true}
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

export default EditProfile;
