import {connect} from 'mongoose';
const dbConnect = async () => {
    try {
        const mongoDbConnection = await connect(process.env.CONNECTION_STRING);
        console.log("Connected to MongoDB", mongoDbConnection.connection.host);
    }
    catch (error) {
        console.log("Error while connecting to MongoDB", error);
        process.exit(1);
    }
};

export default dbConnect;