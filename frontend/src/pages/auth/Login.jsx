import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import "../../index.css";

const Login = () => {
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
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<form class="login100-form validate-form flex flex-col justify-center">
						<Link
							to="/"
							class="login100-form-title py-3 mb-5 flex justify-center"
						>
							<img src="src/assets/img/logo_black.png" alt="" />
						</Link>

						<span class="login100-form-title p-b-43">
							Login to continue.
						</span>

						<div
							class="wrap-input100 validate-input"
							data-validate="Valid email is required: ex@abc.xyz"
						>
							<input class="input100" type="text" name="email" />
							<span class="focus-input100"></span>
							<span class="label-input100">Email</span>
						</div>

						<div
							class="wrap-input100 validate-input"
							data-validate="Password is required"
						>
							<input
								class="input100"
								type="password"
								name="pass"
							/>
							<span class="focus-input100"></span>
							<span class="label-input100">Password</span>
						</div>

						<div class="flex-sb-m w-full p-t-20 p-b-32">
							<div class="contact100-form-checkbox">
								<input
									class="input-checkbox100"
									id="ckb1"
									type="checkbox"
									name="remember-me"
								/>
								<label class="label-checkbox100" for="ckb1">
									Remember me
								</label>
							</div>

							<div>
								<a href="#" class="txt1">
									Forgot Password?
								</a>
							</div>
						</div>

						<div class="container-login100-form-btn">
							<button class="login100-form-btn">Login</button>
						</div>

						<div class="text-center p-t-46 p-b-20">
							<span class="txt2">or sign up using</span>
						</div>

						<div class="login100-form-social flex-c-m">
							<a
								href="#"
								class="login100-form-social-item flex-c-m bg3 m-r-5"
							>
								<i class="fa fa-google" aria-hidden="true"></i>
							</a>

							<a
								href="#"
								class="login100-form-social-item flex-c-m bg1 m-r-5"
							>
								<i
									class="fa fa-facebook-f"
									aria-hidden="true"
								></i>
							</a>

							<a
								href="#"
								class="login100-form-social-item flex-c-m bg2 m-r-5"
							>
								<i class="fa fa-twitter" aria-hidden="true"></i>
							</a>
						</div>

						<div class="text-center py-3 mt-12">
							<span class="txt2">Don't have an account? </span>
							<Link
								to="/signup"
								className="txt2 text-blue-500 hover:text-blue-950"
							>
								Sign Up
							</Link>
						</div>
					</form>

					<div
						class="login100-more"
						style={{
							backgroundImage:
								"url('src/assets/img/hero/hero-1.jpg')",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Login;
