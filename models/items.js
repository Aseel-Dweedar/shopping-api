import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    title: String,
    body: String,
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
});

const ItemsModal = mongoose.model("items", itemSchema);

export default ItemsModal;