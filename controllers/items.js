import ItemsModal from "../models/items.js"
import mongoose from "mongoose";

export const getItems = async (req, res) => {
    try {
        const items = await ItemsModal.find({}).populate("user")
        res.status(200).json({ data: items})
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getItem = async (req, res) => {
    let { id } = req.params;
    try {
        const item = await ItemsModal.findById(id);
        res.status(200).json(item);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createItem = async (req, res) => {
    const item = req.body;
    const newItem = new ItemsModal(item);
    try {
        await newItem.save();
        res.status(201).json(newItem)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    const { id: _id } = req.params;
    const item = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json("No Item With This Id!");
    const updatedItem = await ItemsModal.findByIdAndUpdate(_id, { ...item, _id }, { new: true });
    res.json(updatedItem);
}


export const deleteItem = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("No Item With This Id!");
    await ItemsModal.findOneAndRemove({_id : id});
    res.json({ message: "Deleted successfully" });

}