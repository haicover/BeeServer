const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    describe: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    utilities: {
        type: Array,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    result: {
        type: Array,
        require: true
    },
    isFavorite: {
        type: Boolean,
        require: true
    }
})
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        require: true
    },
    avatar: {
        type: String,
    },
    photos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Photo"
        }
    ]
})
const WeddingDress = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    describe: {
        type: String,
        require: true
    },
    rental_price: {
        type: Number,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    color: {
        type: Array,
        require: true
    },
    material: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    style: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})
let PhotoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    node: {
        type: String,
        require: true
    },
    size: {
        type: Array,
        require: true
    },
    material: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
})

let NewSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    quantity_View: {
        type: Number,
        require: true
    },
    data: {
        type: String,
        require: true
    },
    source: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})

let CategorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    news: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "News"
        }
    ]
})

let Service = mongoose.model("Service", serviceSchema);
let Dress = mongoose.model("Dress", WeddingDress);
let User = mongoose.model("User", UserSchema);
let Category = mongoose.model("Category", CategorySchema);
let News = mongoose.model("News", NewSchema);
let Photo = mongoose.model("Photo", PhotoSchema);
module.exports = { Service, User, Dress, Photo };