import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    cityName: String,
    image: String,
    description: String,
    url_1: String,
    url_2: String
});

const cardDescription = mongoose.model('cardDescription', cardSchema);

export default cardDescription;