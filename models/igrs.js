const mongoose = require('mongoose');

const eigr = new mongoose.Schema({

    _id: {
        type:String
    },
    Locality: {
        type:String
    },
    Date: {
        type:String
    },
    Flat: {
        type:String
    },
    Building_Name: {
        type:String
    },
    Area: {
        type:String
    },
    Wing: {
        type:String
    },
    Total_Price: {
        type:String
    },
    ["Resale_or _Primary"]: {
        type:String
    },
    per_sq_ft: {
        type:String
    },
    Area_Type: {
        type:String
    },
    RERA_Code: {
        type:String
    },
    Floor: {
        type:String
    },
    NC: {
        type:String
    },
    Village: {
        type:String
    },
    Project_Name: {
        type:String
    },
    Flat_Name: {
        type:String
    },
    CA: {
        type:String
    },
    Terrace: {
        type:String
    },
    Balcony: {
        type:String
    },
    Dry_Balcony: {
        type:String
    },
    CTS_No: {
        type:String
    },
    Survey_No: {
        type:String
    },
    GAT_No: {
        type:String
    },
    Plot_No: {
        type:String
    },
    Marathi_Property_Description: {
        type:String
    },
    Translated_Property_Description: {
        type:String
    }

});


const Igr = new mongoose.model('igr', eigr);

module.exports = Igr;