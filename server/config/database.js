import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DATABASE}`).then(
            console.log('Successful! Database Connect 👍')
        ).catch((e) => {
            console.error('Unsuccessful! Database not Connect 👎', e)
        });
    } catch (e) {
        console.error('Database Function not working 😒', e);
    }
};

export default connectDB;