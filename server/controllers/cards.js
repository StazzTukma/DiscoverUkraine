import express from 'express';
import mongoose from 'mongoose';
import CardDescription from '../models/cardDescription.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const cardDescription = await CardDescription.find();
                
        res.status(200).json(cardDescription);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;