const { Schema, default: mongoose, Mongoose } = require("mongoose");

const VendorSchema = new Schema({
    name: {
        type: string,
    },
    vendortype: {
        type: string,
    },
    criticality: {
        type: string,
    },
    status: {
        type: string,
    },
    contact: {
        type: string,
    },
    serviceProvided: {
        type: string,
    },
})

const Vendor = Mongoose.models.Vendor || mongoose.model("Vendor", VendorSchema);

export default Vendor;