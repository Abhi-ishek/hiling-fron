import mongoose from "mongoose";
const connection = () => {
    mongoose.connect(process.env.MONGODB_URL)   
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => { 
            console.log("Database not connected", error);
        });
}
export default connection;