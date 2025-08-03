const Item = require('../models/itemModel');
exports.createItem = async (req, res) => {
    const { name, qty, rate } = req.body;
    const item = new Item({ name, qty, rate });
    await item.save();
    res.status(201).json({ message: 'Item created', item });
};

exports.getAllItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};

exports.getItemById = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.json(item);
};

exports.updateItem = async (req, res) => {
    const { name, qty, rate } = req.body;
    const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        { name, qty, rate },
        { new: true }
    );
    res.json({ message: 'Item updated', item: updatedItem });
};

exports.deleteItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
};