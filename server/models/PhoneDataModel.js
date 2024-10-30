import mongoose from 'mongoose';

const mobilePhoneSchema = new mongoose.Schema({
  phoneId: { type: Number, unique: true }, 
  brandName: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
});


mobilePhoneSchema.statics.autoIncrement = async function () {
  const lastPhone = await this.findOne().sort({ phoneId: -1 });
  return lastPhone ? lastPhone.phoneId + 1 : 1;
};


mobilePhoneSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.phoneId = await this.constructor.autoIncrement();
  }
  next();
});

const MobilePhone = mongoose.model('MobilePhone', mobilePhoneSchema);
export default MobilePhone;