// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async () => {
//   try {
//     mongoose.set("strictQuery", true);
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//     });

//     console.log("MongoDB is Connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


// import mongoose from "mongoose";

// const Connection = async (username, password) => {
//   mongoose.set("strictQuery", false);
//   try {
//     await mongoose.connect(process.env.DB_CONNECT, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log("Database Connected Succesfully");
//   } catch (error) {
//     console.log("Error: ", error.message);
//   }
// };

// export default Connection;




// db.js
// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       db,
//       {
//         useNewUrlParser: true
//       }
//     );
//     console.log('MongoDB is Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };
// module.exports = connectDB;

// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI')


// const connectDB = async () => {

// try{
//   mongoose.set('strictQuery', false);
//     await mongoose.connect(db);
//     console.log('MongoDB connected..');
// }catch(err){
//     console.error(err.message);
//     process.exit(1)
// }
// }

// module.exports = connectDB;






import mongoose from "mongoose";

const Connection = async (username, password) => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;