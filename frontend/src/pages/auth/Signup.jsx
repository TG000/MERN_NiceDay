import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
	return (
		<div>
			<div className="w-[530px] h-[520px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="w-[200px] h-[200px] absolute rounded-[50%] bg-gradient-to-b from-[#708090] to-[#C0C0C0] left-[-80px] top-[-80px]"></div>
				<div className="w-[200px] h-[200px] absolute rounded-[50%] bg-gradient-to-r from-[#ff512f] to-[#f09819] right-[-30px] bottom-[-80px]"></div>
			</div>
			<form
				className="w-[500px] bg-[#ffffff86] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 
                    left-1/2 rounded-[10px] backdrop-blur-[10px] border-2 border-[#28282856] py-[50px] px-[35px]"
			>
				<Link
					to="/"
					className="block text-[42px] font-medium leading-[42px] text-center text-[red]"
				>
					<span className="text-black">Nice Day</span>.
				</Link>

				<label className="block mt-[30px] text-[16px] font-medium text-black">
					Username
					<input
						className="block h-[50px] w-full bg-[#00000012] rounded-[3px] py-0 px-[15px] mt-[8px] text-[16px] font-light placeholder:text-[#1b1b1b]"
						type="text"
						placeholder="Username"
						id="username"
					/>
				</label>

				<label className="block mt-[30px] text-[16px] font-medium text-black">
					Email
					<input
						className="block h-[50px] w-full bg-[#00000012] rounded-[3px] py-0 px-[15px] mt-[8px] text-[16px] font-light placeholder:text-[#1b1b1b]"
						type="text"
						placeholder="Email"
						id="email"
					/>
				</label>

				<label className="block mt-[30px] text-[16px] font-medium text-black">
					Phone Number
					<input
						className="block h-[50px] w-full bg-[#00000012] rounded-[3px] py-0 px-[15px] mt-[8px] text-[16px] font-light placeholder:text-[#1b1b1b]"
						type="text"
						placeholder="Phone Number"
						id="phone_number"
					/>
				</label>

				<label className="block mt-[30px] text-[16px] font-medium text-black">
					Password
					<input
						className="block h-[50px] w-full bg-[#00000012] rounded-[3px] py-0 px-[15px] mt-[8px] text-[16px] font-light placeholder:text-[#1b1b1b]"
						type="password"
						placeholder="Password"
						id="password"
					/>
				</label>

				<label className="block mt-[30px] text-[16px] font-medium text-black">
					Confirm Password
					<input
						className="block h-[50px] w-full bg-[#00000012] rounded-[3px] py-0 px-[15px] mt-[8px] text-[16px] font-light placeholder:text-[#1b1b1b]"
						type="password"
						placeholder="Confirm Password"
						id="confirm_password"
					/>
				</label>

				<button className="mt-[35px] mb-[5px] w-full bg-white text-[#080710] py-[15px] px-0 text-[18px] font-semibold rounded-[5px] cursor-pointer">
					Sign Up
				</button>

				<p className="mt-[30px] flex justify-center bg-black py-4 rounded-lg">
					Already have an account?
					<Link to="/sign-up" className="ml-1 text-blue-500">
						Login.
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Signup;
