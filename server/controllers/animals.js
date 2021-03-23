const AnimalModel = require('../models/AnimalModel')

const getAnimals = async (req, res) => {
    try {
        const animals = await AnimalModel.find();
        res.status(200).json({ animals })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
};

const postAnimal = async (req, res) => {
    const { name, breed, weight, birthDate } = req.body;
    try {
        const createdAnimal = await AnimalModel.create({ name, breed, weight, birthDate })
        res.status(200).json({
            animal: {
                id: createdAnimal._id,
                name: createdAnimal.name,
                breed: createdAnimal.breed,
                weight: createdAnimal.weight,
                birthDate: createdAnimal.birthDate
            }
        });
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
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