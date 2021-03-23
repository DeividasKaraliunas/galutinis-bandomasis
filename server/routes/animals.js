const { Router } = require('express');

const {
    getAnimals,
    postAnimal,
    updateAnimal,
    deleteAnimal
} = require('../controllers/animals')

const router = Router();

router.get('/', getAnimals);

router.post('/', postAnimal);

router.patch('/:id', updateAnimal);

router.delete('/:id', deleteAnimal);

module.exports = router;