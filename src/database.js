import mongoose from "mongoose";

/*
 *mongoose
 *  .connect(process.env.MONGO_URL_DEV, {
 *    useNewUrlParser: true,
 *    useUnifiedTopology: true,
 *  })
 *  .then(() => console.log(`DB is connected on ${process.env.MONGO_URL_DEV}`))
 *  .catch((err) => console.error(err));
 */

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL_DEV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DB is connected on ${process.env.MONGO_URL_DEV}`);
  } catch (error) {
    handleError(error);
  }
};

connect();
