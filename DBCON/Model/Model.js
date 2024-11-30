let mongoose = require("mongoose")

let productschema = new mongoose.Schema({
name: { type: String, required: true },
category: { type: String, required: true },
price: { type: String, required: true },
brand: { type: String },
productPage: { type: String },
image: { type: String }
});

let Product = new mongoose.model('Product', productschema);

let createDoc =()=>{
    let product1 = new Product(
    {name: "Nails",
        category: "Acessories",
        price: "368 rs",
        brand: "Jewels",
        image: "clothes.jpg"
    }
    
)
product1.save()
}

module.exports = createDoc
