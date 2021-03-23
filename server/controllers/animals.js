const AnimalModel = require('../models/AnimalModel')

const getAnimals = async (req, res) => {
    try {
        const animals = await AnimalModel.find();
        res.status(200).json({ animals })
    }
    catch (error) {
        res.status(404).json()
    }
};

const postAnimal = async (req, res) => {
    res.status(200).json('POST')
};

const updateAnimal = async (req, res) => {
    res.status(200).json('UPDATE')
};

const deleteAnimal = async (req, res) => {
    res.status(200).json('DELETE')
};

module.exports = {
    getAnimals,
    postAnimal,
    updateAnimal,
    deleteAnimal
}