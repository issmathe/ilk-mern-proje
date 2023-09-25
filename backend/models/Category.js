const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema); // Model adı "Category" olarak tanımlanmış olmalıdır

module.exports = Category;
