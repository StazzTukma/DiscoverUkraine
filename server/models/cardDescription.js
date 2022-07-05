import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    cityName: String,
    image: String,
    description: String,
    url_1: String,
    url_2: String
}, {collection: "test"});

const Card = mongoose.model("Card", cardSchema);

export default Card;