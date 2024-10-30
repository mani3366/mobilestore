import MobilePhone from '../models/PhoneDataModel.js';

const getPhones = async (req, res) => {
  try {
    const phones = await MobilePhone.find().sort({ createdAt: -1 });
    res.json(phones);
  } catch {
    res.status(500).json({ message: 'Failed to fetch mobile phones' });
  }
};

const addPhone = async (req, res) => {
  const { brandName, year, price } = req.body;

  try {
    const newPhone = new MobilePhone({ brandName, year, price });
    await newPhone.save();
    res.json({ message: 'Mobile phone added successfully',newPhone });
  } catch {
    res.status(500).json({ message: 'Failed to add mobile phone' });
  }
};

export default { getPhones, addPhone };