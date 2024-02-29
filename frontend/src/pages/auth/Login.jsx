import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/api/userApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import "./Auth.css";
import { Loader } from "../../components/";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();

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

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const res = await login({ email, password }).unwrap();
			console.log(res);
			dispatch(setCredentials({ ...res }));
		} catch (error) {
			toast.error(error?.data?.message || error.message);
		}
	};

	return (
		<>
			<Loader />

			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<form
							onSubmit={submitHandler}
							className="login100-form validate-form flex-c flex-col"
						>
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
								Login to continue.
							</span>

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
								data-validate="Password is required"
							>
								<input
									className="input100"
									type="password"
									name="pass"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<span className="focus-input100"></span>
								<span className="label-input100">Password</span>
							</div>

							<div className="flex-sb-m w-full p-t-20 p-b-32">
								<div className="contact100-form-checkbox">
									<input
										className="input-checkbox100"
										id="ckb1"
										type="checkbox"
										name="remember-me"
									/>
									<label
										className="label-checkbox100"
										htmlFor="ckb1"
									>
										Remember me
									</label>
								</div>

								<div>
									<a href="#" className="txt1">
										Forgot Password?
									</a>
								</div>
							</div>

							<div className="container-login100-form-btn">
								<button
									className="login100-form-btn"
									disabled={isLoading}
									type="submit"
								>
									{isLoading ? "Logging In" : "Login"}
								</button>
							</div>

							<div className="text-center p-t-46 p-b-20">
								<span className="txt2">or sign up using</span>
							</div>

							<div className="login100-form-social flex-c-m">
								<a
									href="#"
									className="login100-form-social-item flex-c-m bg3 m-r-5"
								>
									<i
										className="fa fa-google"
										aria-hidden="true"
									></i>
								</a>

								<a
									href="#"
									className="login100-form-social-item flex-c-m bg1 m-r-5"
								>
									<i
										className="fa fa-facebook-f"
										aria-hidden="true"
									></i>
								</a>

								<a
									href="#"
									className="login100-form-social-item flex-c-m bg2 m-r-5"
								>
									<i
										className="fa fa-twitter"
										aria-hidden="true"
									></i>
								</a>
							</div>

							<div className="text-center p-t-12 p-b-12 m-t-48">
								<span className="txt2">
									Don't have an account?{" "}
								</span>
								<Link
									to={
										redirect != "/"
											? `/signup?redirect=${redirect}`
											: "/signup"
									}
									className="txt2 text-blue-500 hover:text-blue-950"
								>
									Sign Up
								</Link>
							</div>
						</form>

						<div
							className="login100-more"
							style={{
								backgroundImage:
									"url('src/assets/img/hero/hero-1.jpg')",
							}}
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
