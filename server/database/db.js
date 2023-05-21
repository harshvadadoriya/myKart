import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connection = async (USER, PASS) => {
	try {
		await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
		console.log('DB connected');
	} catch (err) {
		console.log('Error while DB connection', err.message);
	}
};
