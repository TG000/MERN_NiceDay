import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import createToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req, res) => {
	const { full_name, email, phone_number, password } = req.body;

	if (!full_name || !email || !phone_number || !password) {
		throw new Error("Please fill all the fields.");
	}

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400).send("User already existed!");
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const newUser = new User({
		full_name,
		email,
		phone_number,
		password: hashedPassword,
	});

	try {
		await newUser.save();
		createToken(res, newUser._id);

		res.status(201).json({
			_id: newUser._id,
			full_name: newUser.full_name,
			email: newUser.email,
			phone_number: newUser.phone_number,
			isAdmin: newUser.isAdmin,
		});
	} catch (error) {
		res.status(400);
		throw new Error("Invalid user data!");
	}
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		const isPasswordValid = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (isPasswordValid) {
			createToken(res, existingUser._id);

			res.status(201).json({
				_id: existingUser._id,
				full_name: existingUser.full_name,
				email: existingUser.email,
				phone_number: existingUser.phone_number,
				isAdmin: existingUser.isAdmin,
			});

			return;
		}
	}
});

const logoutUser = asyncHandler(async (req, res) => {
	res.cookie("jwt", "", {
		httpOnly: true,
		expires: new Date(0),
	});

	res.status(200).json({ message: "Logged out successfully!" });
});

const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

const getCurrentUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			full_name: user.full_name,
			email: user.email,
			phone_number: user.phone_number,
		});
	} else {
		res.status(404);
		throw new Error("User not found.");
	}
});

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.full_name = req.body.full_name || user.full_name;
		user.email = req.body.email || user.email;
		user.phone_number = req.body.phone_number || user.phone_number;

		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(req.body.password, salt);
			user.password = hashedPassword;
		}

		const updatedUser = await User.save();

		res.json({
			_id: updatedUser._id,
			full_name: updatedUser.full_name,
			email: updatedUser.email,
			phone_number: updatedUser.phone_number,
			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("User not found.");
	}
});

const deleteUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		if (user.isAdmin) {
			res.status(400);
			throw new Error("Cannot delete admin user!");
		}

		await User.deleteOne({ _id: user._id });
		res.json({ message: "User removed" });
	} else {
		res.status(404);
		throw new Error("User not found.");
	}
});

const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select("-password");

	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

const updateUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		user.full_name = req.body.full_name || user.full_name;
		user.email = req.body.email || user.email;
		user.phone_number = req.body.phone_number || user.phone_number;
		user.isAdmin = Boolean(req.body.isAdmin);

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			full_name: updatedUser.full_name,
			email: updatedUser.email,
			phone_number: updatedUser.phone_number,
			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

export {
	createUser,
	loginUser,
	logoutUser,
	getAllUsers,
	getCurrentUserProfile,
	updateCurrentUserProfile,
	deleteUserById,
	getUserById,
	updateUserById,
};
