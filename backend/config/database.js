import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URI);
		console.log("Database connected successfully!");
	} catch (error) {
		console.error(`ERROR: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
