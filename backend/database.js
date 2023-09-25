const mongoose = require("mongoose");

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB bağlandı nasıl zorlandım anlatam");
  } catch (err) {
    console.error(`MongoDB bağlantısı kurulamadı: ${err}`);
  }
};

module.exports = database;


