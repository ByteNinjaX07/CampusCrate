const lostitemsModel = require('../models/lostItemsModel.js');

const getLost = async (req, res) => {
    try {
        const lostItems = await lostitemsModel.find();
        if (!lostItems || lostItems.length === 0) {
            return res.status(404).json({ message: 'No lost items found' });
        }   

        res.status(200).json(lostItems);
        
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving lost items', error });
    }
}

module.exports = { getLost };