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
    const { id } = req.params;
    try {
        const updatedAnimal = await AnimalModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            animal: {
                id: updatedAnimal._id,
                name: updatedAnimal.name,
                breed: updatedAnimal.breed,
                weight: updatedAnimal.weight,
                birthDate: updatedAnimal.birthDate
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

};

const deleteAnimal = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAnimal = await AnimalModel.findByIdAndDelete(id)
        res.status(200).json({
            animal: {
                id: deletedAnimal._id,
                name: deletedAnimal.name,
                breed: deletedAnimal.breed,
                weight: deletedAnimal.weight,
                birthDate: deletedAnimal.birthDate
            }
        });
    } catch (error) {
        res.status(200).json({ message: error.message })

    }
};

module.exports = {
    getAnimals,
    postAnimal,
    updateAnimal,
    deleteAnimal
}