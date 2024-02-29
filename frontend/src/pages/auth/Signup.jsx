import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSignupMutation } from "../../redux/api/userApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import "./Auth.css";
import { Loader } from "../../components";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [signup, { isLoading }] = useSignupMutation();

	const { userInfo } = useSelector((state) => state.auth);

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get("redirect") || "/";

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	useEffect(() => {
		/*==================================================================
        [ Focus Contact2 ]*/
		$(".input100").each(function () {
			$(this).on("blur", function () {
				if ($(this).val().trim() != "") {
					$(this).addClass("has-val");
				} else {
					$(this).removeClass("has-val");
				}
			});
		});

		/*==================================================================
    [ Validate ]*/
		var input = $(".validate-input .input100");

		$(".validate-form").on("submit", function () {
			var check = true;

			for (var i = 0; i < input.length; i++) {
				if (validate(input[i]) == false) {
					showValidate(input[i]);
					check = false;
				}
			}

			return check;
		});

		$(".validate-form .input100").each(function () {
			$(this).focus(function () {
				hideValidate(this);
			});
		});

		function validate(input) {
			if (
				$(input).attr("type") == "email" ||
				$(input).attr("name") == "email"
			) {
				if (
					$(input)
						.val()
						.trim()
						.match(
							/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
						) == null
				) {
					return false;
				}
			} else {
				if ($(input).val().trim() == "") {
					return false;
				}
			}
		}

		function showValidate(input) {
			var thisAlert = $(input).parent();

			$(thisAlert).addClass("alert-validate");
		}

		function hideValidate(input) {
			var thisAlert = $(input).parent();

			$(thisAlert).removeClass("alert-validate");
		}
	});

	return (
		<>
			<Loader />
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<form className="login100-form validate-form flex-c flex-col">
							<Link
								to="/"
								className="login100-form-title p-t-12 p-b-12 m-b-20 flex-c"
							>
								<img
									src="src/assets/img/logo_black.png"
									alt=""
								/>
							</Link>

							<span className="login100-form-title p-b-43">
								Create an account.
							</span>

							<div
								className="wrap-input100 validate-input"
								data-validate="Username is required!"
							>
								<input
									className="input100"
									type="text"
									name="username"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
								<span className="focus-input100"></span>
								<span className="label-input100">Username</span>
							</div>

							<div
								className="wrap-input100 validate-input"
								data-validate="Valid email is required: ex@abc.xyz"
							>
								<input
									className="input100"
									type="text"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<span className="focus-input100"></span>
								<span className="label-input100">Email</span>
							</div>

							<div
								className="wrap-input100 validate-input"
								data-validate="Phone number is required!"
							>
								<input
									className="input100"
									type="text"
									name="phone_number"
									value={phoneNumber}
									onChange={(e) =>
										setPhoneNumber(e.target.value)
									}
								/>
								<span className="focus-input100"></span>
								<span className="label-input100">
									Phone Number
								</span>
							</div>

							<div
								className="wrap-input100 validate-input"
								data-validate="Password is required!"
							>
								<input
									className="input100"
									type="password"
									name="password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<span className="focus-input100"></span>
								<span className="label-input100">Password</span>
							</div>

							<div
								className="wrap-input100 validate-input"
								data-validate="Password and confirm password must match!"
							>
								<input
									className="input100"
									type="password"
									name="confirm_pass"
									value={confirmPass}
									onChange={(e) =>
										setConfirmPass(e.target.value)
									}
								/>
								<span className="focus-input100"></span>
								<span className="label-input100">
									Confirm Password
								</span>
							</div>

							<div className="container-login100-form-btn m-t-12">
								<button
									className="login100-form-btn"
									disabled={isLoading}
									type="submit"
								>
									{isLoading ? "Signing Up" : "Sign Up"}
								</button>
							</div>

							<div className="text-center p-t-12 p-b-12 m-t-48">
								<span className="txt2">
									Don't have an account?{" "}
								</span>
								<Link
									to={
										redirect
											? `/login?redirect=${redirect}`
											: "/login"
									}
									className="txt2 text-blue-500 hover:text-blue-950"
								>
									Login
								</Link>
							</div>
						</form>

						<div
							className="login100-more"
							style={{
								backgroundImage:
									"url('src/assets/img/hero/hero-2.jpg')",
							}}
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
