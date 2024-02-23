import { Schema, model } from "mongoose";
const productSchema= new Schema({
    urlImg: String,
    barcode:{
        type: String,
        unique: true,
        require: true
    },
    description: String,
    size: String,
    brand: String,
    price: Number,
    stock: Number,
    status: Number
}, {
    versionKey:false,//para que no se inserte en los documentos "_versionV"
    timestamps: true,
});

export default model('product', productSchema);//para exportar el producto y utilizar el esquema "productSchema"