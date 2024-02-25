import React from "react";
import "./Login.css";

const Login = () => {
	return (
		<div>
			<div className="background w-[430px] h-[520px] absolute left-1/2 top-1/2">
				<div className="shape"></div>
				<div className="shape"></div>
			</div>
			<form>
				<h3>Login Here</h3>

				<label>
					Username
					<input
						type="text"
						placeholder="Email or Phone"
						id="username"
					/>
				</label>

				<label>
					Password
					<input
						type="password"
						placeholder="Password"
						id="password"
					/>
				</label>

				<button>Log In</button>
				<div className="social">
					<div className="go">
						<i className="fab fa-google"></i> Google
					</div>
					<div className="fb">
						<i className="fab fa-facebook"></i> Facebook
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
