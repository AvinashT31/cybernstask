import mongoose, { Schema } from "mongoose";

const VendorSchema = new Schema({
    name: {
        type: String,
    },
    vendortype: {
        type: String,
    },
    criticality: {
        type: String,
    },
    status: {
        type: String,
    },
    contact: {
        type: String,
    },
    serviceProvided: {
        type: String,
    },
})

const Vendor = mongoose.models.Vendor || mongoose.model("Vendor", VendorSchema);

export default Vendor;