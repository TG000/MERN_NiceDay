import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import "../../index.css";

const Signup = () => {
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
							Create an account.
						</span>

						<div
							class="wrap-input100 validate-input"
							data-validate="Valid username is required!"
						>
							<input
								class="input100"
								type="text"
								name="username"
							/>
							<span class="focus-input100"></span>
							<span class="label-input100">Username</span>
						</div>

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

						<div
							class="wrap-input100 validate-input"
							data-validate="Password and confirm password must match!"
						>
							<input
								class="input100"
								type="password"
								name="confirm_pass"
							/>
							<span class="focus-input100"></span>
							<span class="label-input100">Confirm Password</span>
						</div>

						<div class="container-login100-form-btn mt-3">
							<button class="login100-form-btn">Sign Up</button>
						</div>

						<div class="text-center py-3 mt-12">
							<span class="txt2">Already have an account? </span>
							<Link
								to="/login"
								className="txt2 text-blue-500 hover:text-blue-950"
							>
								Login
							</Link>
						</div>
					</form>

					<div
						class="login100-more"
						style={{
							backgroundImage:
								"url('src/assets/img/hero/hero-2.jpg')",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
